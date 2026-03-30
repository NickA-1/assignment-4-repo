import { computed, Injectable, signal } from '@angular/core';
import { Expense, ExpenseCategory } from '../models/expense';

@Injectable({
  providedIn: 'root',
})

export class ExpenseService {
  expenses = signal<Array<Expense>>([]);
  categories = signal<Array<string>>(['Work', 'Leisure', 'Grocery', 'Other']);
  totalExpense = computed( () => {
    let total = 0;
    for (let i = 0; i < this.expenses().length; i++) {
      total += this.expenses()[i].amount;
    }
    return total;
  });
  highestExpense = computed( () => {
    let highest = 0;
    for (let i = 0; i < this.expenses().length; i++) {
      if (this.expenses()[i].amount > highest) {
        highest = this.expenses()[i].amount;
      }
    }
    return highest;
  });
  averageExpense = computed( () => this.totalExpense() / this.transactionCount() );
  transactionCount = computed( () => this.expenses().length );

  addExpense(title: string, amount: number, category: ExpenseCategory) {
    this.expenses.update( list => [...list, {id: this.generateID(), title: title, amount: amount, category: category}] );
  }

  deleteExpense(id: string) {
    this.expenses.update( list => list.filter( expense => expense.id != id ) );
  }

  getExpenseByID(id: string): Expense | null {
    let result = null;
    for (let i = 0; i < this.expenses().length; i++)
      if (this.expenses()[i].id == id) {
        result = this.expenses()[i];
        break
      }
    return result;
  }

  private generateID(): string {
    return "expense_" + this.transactionCount();
  }
}
