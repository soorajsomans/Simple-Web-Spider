import requests
from bs4 import BeautifulSoup



def crowl(url):
	data =[]

	fileN=url+".html"
		
	# source = requests.get(url).text
	with open(fileN) as html_file:
		soup = BeautifulSoup(html_file, 'lxml')


	for article in soup.find_all('article'):
		headline = article.h2.a.text
		# print(headline)

		summary = article.find('div', class_='entry-content').p.text
		# print(summary)

		try:
			vid_src = article.find('iframe',class_="youtube-player")['src']

			vid_id = vid_src.split('/')[4]
			vid_id = vid_id.split('?')[0]
			# print(vid_id)

			yt_link = f'https://youtube.com/watch?v={vid_id}'
		except Exception as e:
			yt_link = None

		# print(yt_link)
		data.append([headline,summary,yt_link])
		# print()

	return data



# def crowlLocal(fileName):
# 	fileN=fileName+".html"
# 	data =[]
# 	with open(fileN) as html_file:
# 		soup = BeautifulSoup(html_file, 'lxml')

# 	match = soup.title.text

# 	match = soup.find('div', class_='footer')

# 	article = soup.find('div', class_='article')

# 	headline=article.a.text

# 	summery = article.p.text


# 	for article in soup.find_all('div', class_='article'):
# 		headline=article.a.text
# 			# print(headline)

# 		summery = article.p.text
# 			# print(summery)
# 		data.append([headline,summery])
# 	return data


# # d=crowl('http://coreyms.com')
# # print(d)