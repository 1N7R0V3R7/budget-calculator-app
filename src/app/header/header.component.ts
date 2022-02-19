import { Component, OnInit } from '@angular/core';
import { ExpenseCatalogue } from '../ExpenseCatalogue.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  expenseAmount: number = 0;
  constructor() { }
  updatedExpenses(newExpenseCatalogue: ExpenseCatalogue[]) {    
    this.expenseAmount = 0;
    newExpenseCatalogue.forEach(expenseItem => {
      this.expenseAmount+=expenseItem.expenseAmount;
    });
  }
  ngOnInit(): void {
  }

}
