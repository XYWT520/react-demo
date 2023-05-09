import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionsFilter } from './store/actions/filter'

const Footer = () => {
  const data = useSelector(({ Todos }) => Todos)
  const dispatch = useDispatch()

  const count = data.filter(item => !item.isDone).length

  return (
    <footer className="footer">
      <span className="todo-count"><strong>{count}</strong> 未完成</span>
      <ul className="filters">
        <li>
          <a className="selected" href="#/" onClick={() => dispatch(actionsFilter('all'))}>所有</a>
        </li>
        <li>
          <a href="#/active" onClick={() => dispatch(actionsFilter('active'))}>待办</a>
        </li>
        <li>
          <a href="#/completed" onClick={() => dispatch(actionsFilter('complete'))}>已完成</a>
        </li>
      </ul>
      <button className="clear-completed" onClick={() => dispatch({ type: 'todos/clearFinish' })}>清空已完成</button>
    </footer>
  )
}

export default Footer
