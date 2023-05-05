import React from 'react';
import { patchTodoList, delTodoList } from '../../../../apis/apis'

const Index = (props) => {
  const { list, getTodoLists } = props

  const onChangeInput = async ({ target }, id) => {
    const data = { done: target.checked, id }
    const res = await patchTodoList(data, id)
    if (!res) return;
    getTodoLists()
  }

  const onClickDelete = async (id) => {
    const res = await delTodoList(id)
    if (!res) return;
    getTodoLists()
  }

  return (
    <>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {list.map((item) => (
            <li className={!item.done ? '' : 'completed'} key={item.id}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={item.done}
                  onChange={(e) => onChangeInput(e, item.id)}
                />
                <label>{item.name}</label>
                <button
                  className="destroy"
                  onClick={() => onClickDelete(item.id)}
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Index;
