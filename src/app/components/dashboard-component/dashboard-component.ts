import { Component, inject } from '@angular/core';
import { ExpenseService } from '../../services/expense-service';

@Component({
  selector: 'app-dashboard-component',
  imports: [],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent {
  expenseService = inject(ExpenseService);

  formatAsMoneyString(amount: number): string {
    if (Number.isNaN(amount)) {
      amount = 0;
    }
    amount = Math.round(amount * 100) / 100
    let result: string = "$" + amount
    if (result.split(".").length == 1) {
      result += ".";
    }
    for (let i = 0; result.split(".")[1].length < 2; i++) {
      result += "0";
    }
    return result;
  }
}
