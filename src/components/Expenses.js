import React, { useState } from 'react'
import ExpensesFilter from "./Expense Filter/ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

function Expenses(props) {
  const [selectedYear, setSelectedYear]=useState("2022")
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  }

  const yearlyFilteredExp = props.expenseData.filter(el => el.date.getFullYear() === parseInt(selectedYear));
  let expensesContent = <p className='expenses-content'>No expenses found in this year.</p>
  if (yearlyFilteredExp.length > 0) {
    expensesContent = yearlyFilteredExp.map(item => {
      return <ExpenseItem key={item.id} expense={item}/>
    })
  }

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter onYearChange={yearChangeHandler} filteredExpensesData={yearlyFilteredExp} />
      </div>
      {expensesContent}
    </Card>
  );
}
export default Expenses;
