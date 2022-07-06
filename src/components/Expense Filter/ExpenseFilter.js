import React from 'react';
import ExpenseTile from '../ExpenseChart/ExpenseTile';
import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
    const monthExp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const getMonthlyExpenses = () => {
        props.filteredExpensesData.forEach(item => {
            monthExp[item.date.getMonth()] += parseInt(item.amount);
        })
    }
    const yearFilterHandler = (event) => {
        props.onYearChange(parseInt(event.target.value));
    }

    getMonthlyExpenses();
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select  onChange={yearFilterHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
            <ExpenseTile monthlyExpense={monthExp}/>
        </div>
    );
};

export default ExpensesFilter;

