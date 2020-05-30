import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetCrowledData } from '../webcrowler/webcrowler.component';


@Injectable({
  providedIn: 'root'
})
export class WebcrowlerdataService {
  
  
  constructor(
    private http:HttpClient
  ) { }


  executeTestService(fileName){
    return this.http.get<GetCrowledData[]>(`http://localhost:5000/url/${fileName}`)
  }
}
