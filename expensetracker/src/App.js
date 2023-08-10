import React, {useState} from 'react';
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from './Components/NewExpenses/NewExpense';


  let DUMMY_EXPENSE = [
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
  const App=() => {

    const [expenses , setExpenses] = useState(DUMMY_EXPENSE);



    const addExpenseHandler =(expense) =>{
      const updateExpense = [expense, ...expenses];
      setExpenses(updateExpense);

    };  
  
    return (
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses item={expenses}/>
      </div>
    );

  }
  


export default App;
