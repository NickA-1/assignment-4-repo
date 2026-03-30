import { Component, inject } from '@angular/core';
import { ExpenseService } from '../../services/expense-service';
import { ExpenseCategory } from '../../models/expense';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-expense',
  imports: [FormsModule],
  templateUrl: './add-expense.html',
  styleUrl: './add-expense.css',
})
export class AddExpense {
  expenseService = inject(ExpenseService);
  titleInput: string = "";
  amountInput: string = "";
  categoryInput: string = this.expenseService.categories()[0];

  addExpense() {
    if (this.titleInput != "" && this.amountInput != "") {
      this.expenseService.addExpense(this.titleInput, Number.parseFloat(this.amountInput), this.categoryInput as ExpenseCategory);
      this.titleInput = "";
      this.amountInput = "";
      this.categoryInput = this.expenseService.categories()[0];
    }
  }
}
