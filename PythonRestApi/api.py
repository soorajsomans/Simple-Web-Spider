import flask
from flask import request, jsonify

import crowler as c
app= flask.Flask(__name__)

app.config["DEBUG"] = True



@app.route('/',methods=['GET'])
def home():
	return "<h1>Distant Reading Archive</h1><p>This site is a prototype API for distant reading of science fiction novels.</p>"


@app.route('/<string:name>')
def witParam(name: str):
	return jsonify(data = name), 200 , {'Access-Control-Allow-Origin': '*'} 


@app.route('/url/<string:name>')
def crowlUrl(name: str):
	
	# url="http://"+name+".com"
	data = c.crowl(name)
	return jsonify(data), 200 , {'Access-Control-Allow-Origin': '*'} 


app.run()
