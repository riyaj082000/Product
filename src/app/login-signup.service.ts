import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {
  public url="http://localhost:3000"

  constructor(private http:HttpClient) { }

login(){
 return  this.http.get<any>(this.url + '/signupUsersList')
}

product(){
 return this.http.get(this.url + '/productDetails') 
}

productById(id:number){
  return this.http.get(this.url + '/productDetails/'+id) 
 }
}
