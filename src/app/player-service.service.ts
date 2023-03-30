import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {

  constructor(private http:HttpClient) { }
  url="http://localhost:9091/save";
  url1="http://localhost:9091/players";
  url2="http://localhost:9091/update";
  url3="http://localhost:9091/delete";
  url4="http://localhost:9091/view1";


  insertService(data:any){
    return this.http.post(this.url,data);
  }

  viewPlayers(){
    return this.http.get(this.url1);
  }

  updateService(data:any){
    return this.http.put(this.url2,data);
  }

  deleteService(data:any){
    return this.http.post(this.url3,data);
  }

  searchPlayer(data:any){
    return this.http.post(this.url4,data);
  }
  
  } 