import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  @Output() expensesAdded = new EventEmitter<{expenseAmount: number, expenseDescription: string}>();
  expenseAmount: number;
  expenseDescription: string;
  constructor() { }

  ngOnInit(): void {
  }
  addExpense() {
    if(this.expenseAmount===0 || this.expenseAmount===null || this.expenseAmount===undefined || this.expenseDescription==='' || this.expenseDescription===null || this.expenseDescription===undefined) {
      alert("Enter both fields with valid inputs!");
      return null;
    }
    this.expensesAdded.emit({
      expenseAmount: this.expenseAmount,
      expenseDescription: this.expenseDescription
    });
    this.expenseAmount = null;
    this.expenseDescription = '';
  }

}
