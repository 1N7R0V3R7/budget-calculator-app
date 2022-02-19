import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExpenseCatalogue } from 'src/app/ExpenseCatalogue.model';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.css']
})
export class ExpenseItemComponent implements OnInit {
  @Input() item: {type: string, expenseAmount: number, expenseDescription: string};
  @Output() expensesUpdated = new EventEmitter<{updateType: string, updateAmount: number, updateDescription: string, updateIndex: ExpenseCatalogue}>();
  @Output() expensesRemoved = new EventEmitter<{removeAmount: number, removeDescription: string}>();

  updateFlag: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  getColor() {
    if(this.item.type==='income') {
      return '#047857';
    }
    else {
      return '#b91c1c';
    }
  }
  updateExpense(event: any) {
    this.updateFlag = !this.updateFlag;
    console.log("Sending for updating from expense-item component");
    event.updateIndex = this.item;
    this.expensesUpdated.emit(event);
  }
  removeExpense(event: any) {
    console.log("Getting the data for sending the amount and description object");
    let parentExpenseItem = event.target.parentElement.parentElement;
    let removeExpenseAmount = parseInt(parentExpenseItem.children[0].innerText.substring(4));
    let removeExpenseDescription = parentExpenseItem.children[1].innerText;

    console.log("Sending for rmoving from expense-item component");
    this.expensesRemoved.emit({
      removeAmount: removeExpenseAmount,
      removeDescription: removeExpenseDescription
    });
  }

}
