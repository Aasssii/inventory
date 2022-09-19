import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImsService {

  constructor(private http:HttpClient) { }

  Signup(signupss:any){
    return this.http.post<any>('http://localhost:3000/signup',signupss)
  }
}
