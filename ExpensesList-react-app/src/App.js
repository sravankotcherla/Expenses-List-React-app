import Expenses from "./components/Expenses"


function App() {
  const expenses = [
    { date: new Date(2020, 6, 3), title: "Movie Tickets", amount: 600 },
    { date: new Date(2020, 6, 5), title: "Food", amount: 1000 },
    { date: new Date(2020, 9, 9), title: "Travel", amount: 300 },
    { date: new Date(2020, 10, 12), title: "Other", amount: 100 },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenseData={expenses}/> 
    </div>
  );
}

export default App;
