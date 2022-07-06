import "./ExpenseTile.css"
import ExpenseBar from "./ExpenseBar"

function ExpenseTile(props) {
    const maxExpense = Math.max(...props.monthlyExpense)
    return (
        <div className="tileContainer">
            <ExpenseBar month="Jan" maxValue={maxExpense} expense={props.monthlyExpense[0]}/>
            <ExpenseBar month="Feb" maxValue={maxExpense} expense={props.monthlyExpense[1]}/>
            <ExpenseBar month="Mar" maxValue={maxExpense} expense={props.monthlyExpense[2]}/>
            <ExpenseBar month="Apr" maxValue={maxExpense} expense={props.monthlyExpense[3]}/>
            <ExpenseBar month="May" maxValue={maxExpense} expense={props.monthlyExpense[4]}/>
            <ExpenseBar month="Jun" maxValue={maxExpense} expense={props.monthlyExpense[5]}/>
            <ExpenseBar month="Jul" maxValue={maxExpense} expense={props.monthlyExpense[6]}/>
            <ExpenseBar month="Aug" maxValue={maxExpense} expense={props.monthlyExpense[7]}/>
            <ExpenseBar month="Sep" maxValue={maxExpense} expense={props.monthlyExpense[8]}/>
            <ExpenseBar month="Oct" maxValue={maxExpense} expense={props.monthlyExpense[9]}/>
            <ExpenseBar month="Nov" maxValue={maxExpense} expense={props.monthlyExpense[10]}/>
            <ExpenseBar month="Dec" maxValue={maxExpense} expense={props.monthlyExpense[11]}/>
        </div>
    )
}

export default ExpenseTile