import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Header = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const onKeyDownEnter = (e) => {
    if (e.code === 'Enter' && (name.trim() !== '')) {
      dispatch({ type: 'todos/add', payload: name })
      setName('')
    }
  }
  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="接下来打算做点啥?" onKeyDown={onKeyDownEnter} value={name} onChange={(e) => setName(e.target.value) } />
    </header>
  )
}

export default Header
