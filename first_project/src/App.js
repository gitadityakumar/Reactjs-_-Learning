import ExpenseItem from "./Components/ExpenseItem";

function App() {
  let expenses = [
    {
      id: "E1",
      title: "Schoole Fee",
      amount: "250",
      date: new Date(2023, 7, 21),
    },
    {
      id: "E2",
      title: "Books",
      amount: "230",
      date: new Date(2023, 4, 21),
    },
    {
      id: "E3",
      title: "House Rent",
      amount: "800",
      date: new Date(2023, 7, 18),
    },
    {
      id: "E4",
      title: "Food",
      amount: "545",
      date: new Date(2023, 7, 8),
    },
  ];
  return (
    <div>
      <h2>Lets get started</h2>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[3].date}
        title={expenses[3].title}
        amount={expenses[3].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
