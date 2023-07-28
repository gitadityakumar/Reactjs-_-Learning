import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {

  //props is a object
  return (
    <div className="expense-item">
      <ExpenseDate  date={props.date}/>
      
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="epense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
