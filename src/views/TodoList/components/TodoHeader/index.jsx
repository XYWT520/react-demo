import React, { useState } from 'react';
import { addTodoList } from '../../../../apis/apis'

const Index = (props) => {
  const { getTodoLists } = props
  const [value, setValue] = useState('')

  const onChangeInput = (e) => {
    const value = e.target.value
    setValue(value)
  }

  const onKeyDown = async (e) => {
    if (e.keyCode !== 13 || value.trim().length <= 0) return;
    const data = { name: value, done: false }
    const res = await addTodoList(data)
    setValue('')
    if (!res) return;
    getTodoLists()
  }

  return (
    <header className="header">
      <h1 className='toods-h1'>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={value}
        onChange={onChangeInput}
        onKeyDown={onKeyDown}
      />
    </header>
  );
}

export default Index;
