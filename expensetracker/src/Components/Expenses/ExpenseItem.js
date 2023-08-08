import React,{useState} from 'react';
import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) =>{

   const [title , setTitle]= useState(props.title);

   const clickHandler = () => {
     setTitle('New Title..');
   }

  //props is a object
  return (
    <Card className="expense-item">
      <ExpenseDate  date={props.date}/>
      
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="epense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
