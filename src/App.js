import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [expenseAmt, setExpenseAmt] = useState("");
  const [balance, setBalance] = useState(0);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const add = (e) => {
    e.preventDefault();
    const resValue = balance + expenseAmt;
    if(expenseAmt > 0){
      const list = [...transactionHistory]
    list.push({
      date: Date(),
      amount: expenseAmt,
      operation: "Add"
    })
    setTransactionHistory([...list])

    setBalance(resValue);
    setExpenseAmt("");
    }
  }

  function remove(e) {
    e.preventDefault();
    const resValue = balance - expenseAmt;
    if (resValue >= 0 && expenseAmt > 0) {
      const list = [...transactionHistory]
      list.push({
        date: Date(),
        amount: expenseAmt,
        operation: "Remove"
      })
      setBalance(resValue);
    setTransactionHistory([...list])
      setExpenseAmt("");
    } else {
      alert("please enter a valid amount");
      setExpenseAmt("");
    }
  }


  return (
    <div className="App">
      <h1>Expense Tracker - Basic</h1>
      <div className='calculation displayView'>
        <h1>Balance : {balance}</h1>
        <form>
          <input type='number' value={expenseAmt} onChange={(e) => setExpenseAmt(parseInt(e.target.value))} />
          <div>
            <button id='add-btn' onClick={add}>Add</button>
            <button id='remove-btn' onClick={remove}>Remove</button>
          </div>
        </form>
      </div>
      <div className='display-result displayView'>
        <h1>Transaction : </h1>
        <div>
          {transactionHistory.map((data) => (
            <ol >{data.date} || {data.amount} || {data.operation}</ol>
          ))

          }
        </div>
      </div>
    </div>
  );
}

export default App;
