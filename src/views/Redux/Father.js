import React from 'react'
import Son from './Son'
import store from '../../store'
import { useSelector } from 'react-redux'

const Father = () => {
  const count = useSelector(s => s)
  return (
    <div>
      <div className='father'>
        <div>
          Father.js
          count值: {count}
        </div>
        <Son></Son>
      </div>
    </div>
  )
}

export default Father
