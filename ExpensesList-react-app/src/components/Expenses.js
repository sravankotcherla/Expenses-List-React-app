import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

// const expenses = [
//   { date: new Date(2020, 6, 3), title: "Movie Tickets", amount: 600 },
//   { date: new Date(2020, 6, 5), title: "Food", amount: 1000 },
//   { date: new Date(2020, 9, 9), title: "Travel", amount: 300 },
//   { date: new Date(2020, 10, 12), title: "Other", amount: 100 },
// ];

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem expense={props.expenseData[0]}/>
      <ExpenseItem expense={props.expenseData[1]} />
      <ExpenseItem expense={props.expenseData[2]}/>
      <ExpenseItem expense={props.expenseData[3]}/>
    </Card>
  );
}
export default Expenses;
