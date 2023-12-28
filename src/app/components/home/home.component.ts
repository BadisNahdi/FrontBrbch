import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Post } from '../../Model/Post';
import { Subscription, takeUntil } from 'rxjs';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Category } from '../../Model/Category';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {


  posts: Post[] | undefined;
  categories: Category[] | undefined;
  private subscription!: Subscription;
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.subscription = this.apiService.getAllPosts().subscribe(
      (res) => this.posts = res,
      (err) => console.log(err)
    );
    this.subscription = this.apiService.getAllCategories().subscribe(
      (res) => this.categories = res,
      (err) => console.log(err)
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
