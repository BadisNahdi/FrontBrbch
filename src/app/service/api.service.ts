import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from '../Model/User';
import { Router } from '@angular/router';
import { Post } from '../Model/Post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = "http://localhost:5000";
  private authState = new BehaviorSubject<boolean>(false);
  private user: User;
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.user = new User();
  }
  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url + "/api/posts");
  }
}
