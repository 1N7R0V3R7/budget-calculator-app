import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ExpenseCatalogue } from 'src/app/ExpenseCatalogue.model';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  @Input() incomes: ExpenseCatalogue[];
  @Output() expensesUpdated = new EventEmitter<{updateType: string, updateAmount: number, updateDescription: string, updateIndex: ExpenseCatalogue}>();
  @Output() expensesRemoved = new EventEmitter<{removeAmount: number, removeDescription: string}>();
  constructor() { }

  ngOnInit(): void {
  }
  removeExpense(event: {removeAmount: number, removeDescription: string}) {
    console.log("Sending for removing from the income component");
    this.expensesRemoved.emit(event);
  }
  updateExpense(event: {updateType: string, updateAmount: number, updateDescription: string, updateIndex: ExpenseCatalogue}) {
    console.log("Sending for updating from the income component");
    this.expensesUpdated.emit(event);
  }
}
