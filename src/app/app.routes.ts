import { Routes } from '@angular/router';
import { AddExpense } from './components/add-expense/add-expense';
import { DashboardComponent } from './components/dashboard-component/dashboard-component';
import { ExpenseList } from './components/expense-list/expense-list';

export const routes: Routes = [
    {
        path: "",
        component: DashboardComponent,
        title: "Dashboard",
    },
    {
        path: "view",
        component: ExpenseList,
        title: "Expense List",
    },
        {
        path: "add",
        component: AddExpense,
        title: "Add Expense",
    },
];
