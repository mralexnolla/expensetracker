import { useState } from "react";
import { createTransaction } from "../redux/slice";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [err, setErr] = useState("")
  

  const dispatch = useDispatch();

  const handleSave = (e) => {
    e.preventDefault();
    if (text.trim() === "" || amount.trim() === "") {
      setErr("field cannot be empty");
      return;
    }
    const newTxn = { id: uuid(), text, amount };
    dispatch(createTransaction(newTxn));
    setText("");
    setAmount("");
    setErr("");
    
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
         
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <h3 style= {{color: "red"}}>{err}</h3> 
        </div>
        <button className="btn" onClick={handleSave}>
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
