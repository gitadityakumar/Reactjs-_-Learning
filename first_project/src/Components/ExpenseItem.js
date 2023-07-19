import './ExpenseItem.css';

function ExpenseItem(){
    return (
        <div className = "expense-item">
            <div>
               July 18th 2023 
            </div>
            <div className ="expense-item_description"> 
                <h2>Car Insurence</h2>
                <div className="epense-item__price">$200</div>
            </div>
        </div>
    );

}


export default ExpenseItem;