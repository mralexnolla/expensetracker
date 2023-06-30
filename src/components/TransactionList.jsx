import { useSelector } from "react-redux";
import TransactionDetails from "./TransactionDetails";


const TransactionList = () => {
 
  const transactions = useSelector((store) => store.transactions.transactions);

  

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction, idx) => (
          <div key={transaction.id + idx}>
            <TransactionDetails transaction={transaction} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
