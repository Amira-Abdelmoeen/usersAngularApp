import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

userApi():Observable<any>{
  return this.http.get(`https://jsonplaceholder.typicode.com/users`)
}

getUserByIdApi(id : string):Observable<any>{
  return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}


  
}
