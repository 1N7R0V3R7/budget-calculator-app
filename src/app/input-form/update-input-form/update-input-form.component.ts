import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-update-input-form',
  templateUrl: './update-input-form.component.html',
  styleUrls: ['./update-input-form.component.css']
})
export class UpdateInputFormComponent implements OnInit {
  @Input() expenseToUpdate: {type: string, expenseAmount: number, expenseDescription: string};
  @Output() expensesUpdated = new EventEmitter<{updateType: string, updateAmount: number, updateDescription: string}>();
  updatedAmount: number;
  updatedDescription: string;
  constructor() { }

  ngOnInit(): void {
  }
  updateExpense() {
    this.expensesUpdated.emit({
      updateType: this.updatedAmount>0 ? 'income' : 'expense',
      updateAmount: this.updatedAmount,
      updateDescription: this.updatedDescription
    });
  }

}
