import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from '../../Model/Post';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent implements OnInit {
  post: Observable<Post> | undefined;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this.post = slug ? this.apiService.getPost(slug) : undefined;
    })
  }

}
