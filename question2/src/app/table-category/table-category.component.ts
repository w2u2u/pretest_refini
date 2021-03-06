import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-table-category',
  templateUrl: './table-category.component.html',
  styleUrls: ['./table-category.component.css'],
})
export class TableCategoryComponent implements OnInit {
  categories: string[] = [];
  search?: string;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  filteredCategories() {
    return this.search
      ? this.categories.filter((c) => c.includes(this.search!))
      : this.categories;
  }
}
