import React from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';


const Expense = (expense) =>{
    return (
        <Card className="expenses">
            {
                expense.item.map(
                    expense => (
                        <ExpenseItem
                          date={expense.date}
                          title={expense.title}
                          amount={expense.amount}
                        />
                        
                    )
                )
            }       
        </Card>
    );
}

export default Expense;