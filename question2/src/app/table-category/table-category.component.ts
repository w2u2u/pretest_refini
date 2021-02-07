import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-table-category',
  templateUrl: './table-category.component.html',
  styleUrls: ['./table-category.component.css'],
})
export class TableCategoryComponent implements OnInit {
  filteredCategories: string[] = [];
  categories: string[] = [];
  search?: string;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
      this.filteredCategories = this.categories;
    });
  }

  onSearch(value: string) {
    if (value) {
      this.filteredCategories = this.categories.filter((c) =>
        c.includes(value)
      );
      return;
    }

    this.filteredCategories = this.categories;
  }
}
