import React, {useState} from 'react'
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"


const NewExpense = (props) => {
    const [formContent, setFormContent] = useState(false);

    const saveExpenseHandler = (expenseData) => {
        props.onImport(expenseData);
    }

    const addNewExpenseHandler = () => {
        setFormContent(true);
    }

    const cancelFunction = () => {
        setFormContent(false);
    }

    return (
        <div className="new-expense">
            {formContent? <ExpenseForm cancelHandler={cancelFunction} onSaveExpenseData={saveExpenseHandler}/> : <button onClick={addNewExpenseHandler}>Add New Expense</button> }
        </div>
    );
}

export default NewExpense;