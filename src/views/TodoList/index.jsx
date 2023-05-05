import React, { useEffect, useState } from 'react';
import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'
import '../../style/index.css'
import { getTodoList } from '../../apis/apis'

const TodoList = () => {
  const [list,setList] = useState([])

  useEffect(() => {
    getTodoLists()
  },[])

  const getTodoLists = async () => {
    const res = await getTodoList()
    setList(res)
  }

  return (
    <>
      <div className='bigBox'>
        <TodoHeader getTodoLists={getTodoLists}></TodoHeader>
        <TodoMain list={list} getTodoLists={getTodoLists}></TodoMain>
        <TodoFooter></TodoFooter>
      </div>
    </>
  );
}

export default TodoList;
