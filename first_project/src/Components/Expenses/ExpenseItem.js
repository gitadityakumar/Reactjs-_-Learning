import React from 'react';
import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) =>{

  //props is a object
  return (
    <Card className="expense-item">
      <ExpenseDate  date={props.date}/>
      
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="epense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
