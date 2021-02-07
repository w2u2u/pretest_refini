import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: string[] = [
    'Animals',
    'Anime',
    'Anti-Malware',
    'Art & Design',
    'Books',
    'Business',
    'Calendar',
    'Cloud Storage & File Sharing',
    'Continuous Integration',
    'Cryptocurrency',
    'Currency Exchange',
    'Data Validation',
    'Development',
  ];

  constructor() {}

  getCategories(): string[] {
    return this.categories;
  }
}
