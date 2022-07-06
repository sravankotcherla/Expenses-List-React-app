import React, {useState} from 'react'
import Expenses from "./components/Expenses"
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  let expenses = [
    { id: 'e1', date: new Date(2022, 1, 15), title: "Movie Tickets", amount: 600 },
    { id: 'e2', date: new Date(2020, 11, 20), title: "Food", amount: 1000 },
    { id: 'e3', date: new Date(2022, 9,28), title: "Travel", amount: 300 },
    { id: 'e4', date: new Date(2020, 10, 17), title: "Other", amount: 100 },
  ];

  const [enteredExpenses, setEnteredExpenses]=useState(expenses)
  const displayImportedExpense = (importedExpense) => {
    setEnteredExpenses((prevExpenses) => {
      return [importedExpense, ...prevExpenses];
    });
  }
  return (
    <div>
      <NewExpense onImport={displayImportedExpense}/>
      <Expenses expenseData={enteredExpenses}/> 
    </div>
  );
}

export default App;
