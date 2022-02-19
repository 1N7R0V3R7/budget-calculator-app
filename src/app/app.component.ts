import { Component, ViewChild } from '@angular/core';
import { ExpenseCatalogue } from './ExpenseCatalogue.model';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'budget-calculator-app';
  // Main list of expenses
  expenseCatalogue: ExpenseCatalogue[] = [];
  localItem: string;
  
  //Used to trigger the methods in the child component
  @ViewChild(HeaderComponent) child: HeaderComponent;
  constructor() {
    // Code to enable local storage
    this.localItem = localStorage.getItem("expenses");
    if(this.localItem===null) {
      this.expenseCatalogue = [];
    }
    else {
      let tempCatalogue = JSON.parse(this.localItem);

      //Converting the local storage object array to expense catalogue object array
      this.expenseCatalogue = tempCatalogue.map(item => new ExpenseCatalogue(item.type, item.expenseAmount, item.expenseDescription));
    }
    this.updateTotalExpense();
  }
  updateTotalExpense() {
    let temp = setTimeout(() => {
      this.child.updatedExpenses(this.expenseCatalogue);
    }, 100);
  }

  // Input froming from input-form component to add tomain expense list
  addToExpensesList(newExpense: {expenseAmount: number, expenseDescription: string}) {
    console.log("Added to the main expense list");
    this.expenseCatalogue.push(
      new ExpenseCatalogue(
        newExpense.expenseAmount>0 ? 'income' : 'expense',
        newExpense.expenseAmount,
        newExpense.expenseDescription
      )
    );
    this.updateHeaderAndLocal();
    console.log(this.expenseCatalogue);
  }
  removeExpense(event: {removeAmount: number, removeDescription: string}) {
    console.log("Removing from the main expense list");
    let index = this.expenseCatalogue.find(expenseItem => expenseItem.expenseAmount===event.removeAmount && expenseItem.expenseDescription===event.removeDescription)
    this.expenseCatalogue = this.expenseCatalogue.filter(expenseItem => expenseItem!==index);
    console.log("Element removed from the main list, updated list is as follows");
    console.log(this.expenseCatalogue);
    this.updateHeaderAndLocal();
  }
  updateExpense(event: {updateType: string, updateAmount: number, updateDescription: string, updateIndex: ExpenseCatalogue}) {
    console.log("Updating to the main list");
    let index = this.expenseCatalogue.indexOf(event.updateIndex);
    this.addToExpensesList({
      expenseAmount: event.updateAmount,
      expenseDescription: event.updateDescription
    });
    this.removeExpense({
      removeAmount: this.expenseCatalogue[index].expenseAmount,
      removeDescription: this.expenseCatalogue[index].expenseDescription
    });
  }
  clearExpense() {
    this.expenseCatalogue = [];
    this.updateHeaderAndLocal();
  }
  updateHeaderAndLocal() {
    this.child.updatedExpenses(this.expenseCatalogue);
    localStorage.setItem("expenses", JSON.stringify(this.expenseCatalogue));
  }
}  


