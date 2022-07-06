
import "./ExpenseItem_Date.css"
import ExpenseItemDate from "./ExpenseItem_Date"
import Card from "./Card"


function ExpenseItem(props) {
    
    return (
        <Card className="expense-Item-Container">
            <ExpenseItemDate expenseDate={props.expense.date}></ExpenseItemDate>
            <div className="expense-Description"> 
                <h2>{props.expense.title}</h2>
            </div>
            <div className="expense-Amount">{`INR ${props.expense.amount}`}</div>
        </Card>
    );
}

export default ExpenseItem