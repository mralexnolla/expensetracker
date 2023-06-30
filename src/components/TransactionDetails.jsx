/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../redux/slice";

const TransactionDetails = ({ transaction }) => {
 
  const dispatch = useDispatch();

  const handDelete = (id) => {
    dispatch(deleteTransaction(id));
  };

   const sign = transaction.amount < 0 ? '-' : '+'
    
  return (
    
      <li className={transaction.amount < 0 ? 'minus': 'plus'}>
        {transaction.text} <span>{sign}Ghc {Math.abs(transaction.amount)}</span> 
        <button className="delete-btn" onClick={() => handDelete(transaction.id)}>x</button>
      </li>
    
  );
};

export default TransactionDetails;
