export interface Expense {
    id: string;
    title: string;
    amount: number;
    category: ExpenseCategory;
}

export type ExpenseCategory = 'Work' | 'Leisure' | 'Grocery' | 'Other' 