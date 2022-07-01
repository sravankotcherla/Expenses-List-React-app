import "./ExpenseItem.css"

function ExpenseItemDate(props){
    const month= props.expenseDate.toLocaleString('en-US', {month: 'long'});
    const Date= props.expenseDate.toLocaleString('en-US', {day: '2-digit'});
    const year= props.expenseDate.getFullYear();
    return (
        <div className="expense-Date">
            <div>{month}</div>
            <div>{Date}</div>
            <div>{year}</div>
        </div>
    );
}

export default ExpenseItemDate;