import {useSelector} from 'react-redux'

const Balance = () => {

  const balance = useSelector((store) => store.transactions.transactions)
  .map(transaction => transaction.amount)
  .reduce((acc, amount) => (acc += parseFloat(amount)), 0)
  
  const bal = balance < 0 ? {style: {color: "red"}} : {style: {color: "green"}}


  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance" style={bal.style}>Ghc{balance.toFixed(2)}</h1>
    </div>
  );
}

export default Balance
