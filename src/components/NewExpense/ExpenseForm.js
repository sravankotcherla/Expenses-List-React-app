import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [enteredTitle, setEneteredTitle] = useState("");
    const [enteredAmount, setEneteredAmount] = useState("");
    const [enteredDate, setEneteredDate] = useState("");

    function onTitleHandler(event) {
        setEneteredTitle(event.target.value);
        console.log(enteredTitle);
    }

    function onAmountHandler(event) {
        setEneteredAmount(event.target.value);
        console.log(enteredAmount);
    }

    function onDateHandler(event) {
        setEneteredDate(event.target.value);
        console.log(enteredDate);
    }

    function addExpenseHandler(event) {
        event.preventDefault();
        const newExpense = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        console.log(newExpense);
    }

    return (
        <form onSubmit={addExpenseHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control label new-expense__control input">
                    <label> Title</label>
                    <input type="text" onChange={onTitleHandler} />
                </div>
                <div className="new-expense__control label new-expense__control input">
                    <label>Amount</label>
                    <input type="text" onChange={onAmountHandler} />
                </div>
                <div className="new-expense__control label new-expense__control input">
                    <label>Date</label>
                    <input type="date" onChange={onDateHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
