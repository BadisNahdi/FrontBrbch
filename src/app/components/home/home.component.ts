import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Post } from '../../Model/Post';
import { Subscription, takeUntil } from 'rxjs';
import { CommonModule, NgFor } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
  private subscription:Subscription = new Subscription();
  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const categoryTitle = params.get('title');
      if (this.router.url === `/post/categoy/${categoryTitle}`) {
        this.apiService.getAllPosts().subscribe(
          (res) => this.posts = res.filter(post => post.category.title === categoryTitle),
          (err) => console.log(err)
        );
      } else {
        this.apiService.getAllPosts().subscribe(
          (res) => this.posts = res,
          (err) => console.log(err)
        );
      }
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
