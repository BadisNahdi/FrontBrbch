import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Post } from '../../Model/Post';
import { Subject } from 'rxjs/internal/Subject';
import { Subscription, takeUntil } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {


  posts: Post[] | undefined;
  private subscription!: Subscription;
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.subscription = this.apiService.getAllPosts().subscribe(
      (res) => this.posts = res,
      (err) => console.log(err)
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
