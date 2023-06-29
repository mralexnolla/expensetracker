import AddTransaction from "./components/AddTransaction"
import Balance from "./components/Balance"
import Header from "./components/Header"
import IncomExpense from "./components/IncomExpense"
import TransactionList from "./components/TransactionList"


function App() {
  

  return (
    <div>
        <Header />
        <div className="container">
          <Balance />
          <IncomExpense />
          <TransactionList />
          <AddTransaction />
        </div>
    </div>
  )
}

export default App
