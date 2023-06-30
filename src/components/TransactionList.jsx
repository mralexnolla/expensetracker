/* eslint-disable react/jsx-key */

import {useSelector} from 'react-redux'
import Transtails from './Transtails'

const TransactionList = () => {

    const transactions  = useSelector((store) => store.transactions.transactions)
    
    
 
  return (
    <div>
      <h3>History</h3>

      <ul id="list" className="list">

        {

        transactions.map((transaction, idx) => (
           <div key={transaction.id + idx}>
                <Transtails  transaction={transaction}/>
            </div>
          ))

        }

     
          
      </ul>
      
          

    </div>


 
  )
}

export default TransactionList
