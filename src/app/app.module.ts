import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InputFormComponent } from './input-form/input-form.component';
import { UpdateInputFormComponent } from './input-form/update-input-form/update-input-form.component';
import { ExpenseTableComponent } from './expense-table/expense-table.component';
import { IncomeComponent } from './expense-table/income/income.component';
import { ExpensesComponent } from './expense-table/expenses/expenses.component';
import { ExpenseItemComponent } from './expense-table/expense-item/expense-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputFormComponent,
    UpdateInputFormComponent,
    ExpenseTableComponent,
    IncomeComponent,
    ExpensesComponent,
    ExpenseItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
