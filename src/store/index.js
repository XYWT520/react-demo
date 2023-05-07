import { configureStore  } from '@reduxjs/toolkit'
// 声明 action
const action1 = { type: 'add1', num: 1 }
const action2 = { type: 'add10', num: 10 }

// 创建 reducer
const initState = 10
const reducer = (state = initState, action) => {
  return state
}

// 创建 store
const store = configureStore ({reducer})
console.log(store)
console.log(store.getState());

// 以前版本写法 
// import { createStoree } from 'redux'
// const store = createStoree (reducer)
