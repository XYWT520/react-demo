import React from 'react'
import Uncle from './Uncle'
import Father from './Father'
import './index.css'
import store from '../../store'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const count = useSelector(s => s)
  return (
    <div className='app'>
      App.js根组件 count值: {count}
      <Father></Father>
      <Uncle></Uncle>
    </div>
  )
}

export default App
