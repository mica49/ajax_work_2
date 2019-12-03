import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private apiUsers = 'https://jsonplaceholder.typicode.com/users'
  private apiPosts = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.apiUsers)
  }

  getLastPosts():Observable<Post[]>{
    let url = this.apiPosts + '?'
    for (let i = 95; i < 100; i++) {
      url += `id=${i}&`// "id=" + i + "&"
    }
    return this.http.get<Post[]>(url)
  }

  
}
