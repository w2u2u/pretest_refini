import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  calNum: number = 0;
  mode: string = 'prime';
  result: boolean = false;

  onCalNumChange(value: number) {
    this.calNum = value;
    this.calculate();
  }

  onModeChange(event: any) {
    this.mode = event.target.value;
    this.calculate();
  }

  calculate() {
    switch (this.mode) {
      case 'fibo':
        this.result = this.isFibo(this.calNum);
        break;
      default:
        // is prime
        this.result = this.isPrime(this.calNum);
        break;
    }
  }

  isPrime(query: number) {
    for (let i = 2; i < query; i++) {
      if (query % i === 0) return false;
    }
    return query > 1;
  }

  // https://www.tutorialspoint.com/check-whether-a-number-is-a-fibonacci-number-or-not-javascript
  isFibo(query: number, count: number = 1, last: number = 0): boolean {
    if (count < query) {
      return this.isFibo(query, count + last, count);
    }
    if (count === query) {
      return true;
    }
    return false;
  }
}
