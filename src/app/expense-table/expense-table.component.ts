import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExpenseCatalogue } from '../ExpenseCatalogue.model';

@Component({
  selector: 'app-expense-table',
  templateUrl: './expense-table.component.html',
  styleUrls: ['./expense-table.component.css']
})
export class ExpenseTableComponent implements OnInit {
  @Input() updatedExpenseCatalogue: ExpenseCatalogue[];
  @Output() expensesUpdated = new EventEmitter<{updateType: string, updateAmount: number, updateDescription: string, updateIndex: ExpenseCatalogue}>();
  @Output() expensesRemoved = new EventEmitter<{removeAmount: number, removeDescription: string}>();
  constructor() { }

  ngOnInit(): void {
  }
  getIncomeCatalogue() {
    return this.updatedExpenseCatalogue.filter(expense => expense.type==='income');
  }
  getExpenseCatalogue() {
    return this.updatedExpenseCatalogue.filter(expense => expense.type==='expense');
  }
  removeExpense(event: {removeAmount: number, removeDescription: string}) {
    console.log("Sending for removing from the expense-table component");
    this.expensesRemoved.emit(event);
  }
  updateExpense(event: {updateType: string, updateAmount: number, updateDescription: string, updateIndex: ExpenseCatalogue}) {
    console.log("Sending for updating from the expense-table component");
    this.expensesUpdated.emit(event);
  }
}
