import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:3000/user"

  constructor(private httpClient: HttpClient) { }

  getAllUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.url)
  }
  
  deleteUser(id:string):Observable<any>{
    return this.httpClient.delete<any>(`${this.url}/${id}`)
  }
  
  




}
