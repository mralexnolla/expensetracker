import {useSelector} from 'react-redux'


const IncomExpense = () => {

   const income = useSelector((store) => store.transactions.transactions)
   .map(transaction => transaction.amount)
   .filter(amount => amount > 0)
   .reduce((acc, amount) => (acc += parseFloat(amount)), 0)


   const expense = useSelector((store) => store.transactions.transactions)
   .map(transaction => transaction.amount)
   .filter(amount => amount < 0)
   .reduce((acc, amount) => (acc += parseFloat(amount)), 0)

   console.log(expense)

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
            -Ghc{expense.toFixed(2)}
          </p>
        </div>
      </div>

  );
}

export default IncomExpense
