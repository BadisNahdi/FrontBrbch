import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from '../Model/User';
import { Router } from '@angular/router';
import { Post } from '../Model/Post';
import { Observable, tap } from 'rxjs';
import { Category } from '../Model/Category';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = "http://localhost:5000";
  private authState = new BehaviorSubject<boolean>(false);
  private user: User = new User();
  private userSubject = new BehaviorSubject<User>(this.user); 
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  getAuthState() {
    return this.authState.asObservable();
  }
  getUser() {
    return this.userSubject.asObservable();
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
  login(email: string, password: string) {
    return this.http.post<any>(this.url+ '/auth/login', {email, password}, {
      withCredentials: true
    }).pipe(
      tap(value => {
        if (value.success) {
          this.authState.next(true);
          this.userSubject.next(value.user)
        } else {
          this.authState.next(false);
        }
      })
    );
  }
}
