import React from 'react'
import Item from './Item'
import { useDispatch, useSelector } from 'react-redux'

const Main = () => {
  const todos = useSelector(({ Filter, Todos }) => {
    console.log(Filter, Todos)
    // switch (Filter) {
    //   case 'complete':
    //     return Todos.filter(item => item.isDone)
    //   case 'active':
    //     return Todos.filter(item => !item.isDone)
    //   default:
    //     return Todos
    // }
    if (Filter === 'active') {
      return Todos.filter(item => !item.isDone)
    } else if (Filter === 'complete') {
      return Todos.filter(item => item.isDone)
    } else {
      return Todos
    }
  })
  const dispatch = useDispatch()

  const isChecked = todos.every(v => v.isDone)
  console.log(isChecked)

  const onChange = () => {
    dispatch({ type: 'todos/setDoneAll', payload: !isChecked })
  }

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" checked={isChecked} onChange={onChange} />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map(item => <Item key={item.id} data={item}></Item>)}
      </ul>
    </section>
  )
}

export default Main
