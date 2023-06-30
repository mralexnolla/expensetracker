import { useState } from "react";

import {v4 as uuid} from "uuid";
import { useDispatch } from "react-redux";
import { addtransactions } from "../redux/slice";


const AddTransaction = () => {
  const[amount, setAmount]= useState("")
  const[text, setText] = useState ("")
  const[error, setError] = useState("")


  const dispatch = useDispatch();

  const handleSave = (e) => {
    e.preventDefault();


    if(text.trim() === "" || amount.trim() === "" ){
      setError('Feild cannot be empty')
      return 
    }

    const newadd ={id:uuid(), text,  amount}

    dispatch(addtransactions(newadd))
    setAmount('');
    setText('');
    setError("")
  }


 


  return (
    <div>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" name="text" value={text} placeholder="Enter text..." onChange={(e)=>setText(e.target.value) }/>

        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" name="amount"  value={amount} placeholder="Enter amount..." onChange ={(e) => setAmount(e.target.value)} />
        </div>
           
              <h3 style={{color: "red"}}>{error}</h3>
           
          <button className="btn" onClick={handleSave}> Add transaction</button>

      </form>
    </div>
  );
};

export default AddTransaction;
