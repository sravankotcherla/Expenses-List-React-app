import React, { useState } from "react"
import "./ExpenseItem_Date.css"
import ExpenseItemDate from "./ExpenseItem_Date"
import Card from "./Card"


function ExpenseItem(props) {
    const [title, setTitle]=useState(props.expense.title)
    const  onClickHandler=()=> {
        setTitle('Updated!!!!')
        console.log(title);
    }
    return (
        <Card className="expense-Item-Container">
            <ExpenseItemDate expenseDate={props.expense.date}></ExpenseItemDate>
            <div className="expense-Description"> 
                <h2>{title}</h2>
            </div>
            <div className="expense-Amount">{`INR ${props.expense.amount}`}</div>
            <button onClick={onClickHandler}> Click </button>
        </Card>
    );
}

export default ExpenseItem