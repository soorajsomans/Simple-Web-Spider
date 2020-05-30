import { Component, OnInit } from '@angular/core';
import { WebcrowlerdataService } from '../service/webcrowlerdata.service';
export class GetCrowledData{
  constructor(
    public headline:string,
    public summary:string,
    public links:string
    ){}
}
@Component({
  selector: 'app-webcrowler',
  templateUrl: './webcrowler.component.html',
  styleUrls: ['./webcrowler.component.css']
})
export class WebcrowlerComponent implements OnInit {
  fileName="";
  crawledData : GetCrowledData[]
  constructor(private webcrowlerService:WebcrowlerdataService) { }

  ngOnInit() {}

  getMessage(){
    this.webcrowlerService.executeTestService(this.fileName).subscribe(
      response=>{
        console.log(response);
        this.crawledData=response
      }
    )
  
  }

}
