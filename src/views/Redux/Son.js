import React, { useState } from 'react'
import store from '../../store'
import { useSelector, useDispatch } from 'react-redux'

const Son = () => {
  const dispatch = useDispatch()
  const num = useSelector(state => state)

  const onClickAddN = () => {
    // store.dispatch({ type: 'addN', payload: 10 })
    dispatch({ type: 'addN', payload: 10 })
  }

  return (
    <>
      <div className='son'>
        <span>son.js</span>
        <h3>count值: {num}</h3>
        <button onClick={onClickAddN}>+ n</button>
      </div>
    </>
  )
}

export default Son
