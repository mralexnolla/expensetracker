import {useSelector} from 'react-redux'

const Balance = () => {

  
  const amounts = useSelector((store) => store.transactions.transactions);
  const amount = amounts.map(item => item.amount)
  const total = amount.reduce((acc, tot) => (acc += parseFloat(tot)), 0)
  
  
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">Ghc {total.toFixed(2)}</h1>
    </div>
  );
};

export default Balance;
