export class ExpenseCatalogue {
    public type: string;
    public expenseAmount: number;
    public expenseDescription: string;
    constructor(type: string, expenseAmount: number, expenseDescription: string) {
        this.type = type;
        this.expenseAmount = expenseAmount;
        this.expenseDescription = expenseDescription;
    }
}