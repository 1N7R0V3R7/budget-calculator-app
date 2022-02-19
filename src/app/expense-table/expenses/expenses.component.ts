import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExpenseCatalogue } from 'src/app/ExpenseCatalogue.model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  @Input() expenses: ExpenseCatalogue[];
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
