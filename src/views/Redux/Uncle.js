import React from 'react'
import './index.css'
import store from '../../store'
import { useSelector } from 'react-redux'

const Uncle = () => {
  const count = useSelector((s) => s)
  console.log(count);
  return (
    <div className='uncle'>
      Uncle.js
      <h3>
        count值: {count}
      </h3>
      <button onClick={() => store.dispatch({ type: 'sub1' })}>- 1</button>
    </div >
  )
}

export default Uncle
