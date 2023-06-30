import {useSelector} from  'react-redux'

const IncomExpense = () => {

  const income = useSelector((store) => store.transactions.transactions)
       .filter(item => item.amount > 0)
       .map(item => item.amount)
       .reduce((acc, amt) => (acc += parseFloat(amt)), 0)
  

  const expense = useSelector((store) => store.transactions.transactions)
       .filter(item => item.amount < 0)
       .map(item => item.amount)
       .reduce((acc, amt) => (acc += parseFloat(amt)), 0)
  console.log(expense);

  
  

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +Ghc{income.toFixed(2)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -Ghc{Math.abs(expense).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default IncomExpense
