import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from '../Model/User';
import { Router } from '@angular/router';
import { Post } from '../Model/Post';
import { Observable } from 'rxjs';
import { Category } from '../Model/Category';

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
  getPost(slug: string): Observable<Post> {
    return this.http.get<Post>(this.url + "/api/posts/" + slug);
  }
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url + "/api/categories");
  }
}
