/* eslint-disable react/prop-types */
import {useDispatch} from 'react-redux'
import { deletetrans } from '../redux/slice'

const Transtails = ({transaction}) => {

  const sign = transaction.amount < 0 ? "-" : ''

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deletetrans(id))
  }
  
  const colorChange = transaction.amount < 0 ? {style:{ color : 'red'}} : {style:{color : 'green'}}

  return (
    <li className='shift' >  
         <div className='text'>{transaction.text}</div> 
         <div className='amount'>{sign} Ghc  <span style= {colorChange.style} >{Math.abs(transaction.amount)} </span> </div> 
            
           <button className="delete-btn" onClick={() => handleDelete(transaction.id)} >x</button>
    </li> 
  )
}

export default Transtails 