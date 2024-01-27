import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Category } from '../../Model/Category';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
  categories: Category[] | undefined;
  private subscription!: Subscription;
  constructor(private apiService:ApiService) { }
  
  ngOnInit(): void {
    this.subscription = this.apiService.getAllCategories().subscribe(
      (res) => this.categories = res,
      (err) => console.log(err)
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
