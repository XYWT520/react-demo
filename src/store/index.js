// import { configureStore  } from '@reduxjs/toolkit'
// // 声明 action
// const action1 = { type: 'add1', num: 1 }
// const action2 = { type: 'add10', num: 10 }

// // 创建 reducer
// const initState = 10
// const reducer = (state = initState, action) => {
//   return state
// }

// // 创建 store
// const store = configureStore ({reducer})
// console.log(store)
// console.log(store.getState());

// 以前版本写法 
// import { createStoree } from 'redux'
// const store = createStoree (reducer)

// import { createStore } from "redux"
// // action
// const action1 = { type: 'add1' }
// const actionAdd10 = { type: 'addN', payload: 10 }
// const actionAdd100 = { type: 'addN', payload: 100 }

// // reducer 
// const reducer = (state = 0, action) => {
//   console.log(state);
//   // if (action.type === 'add1') {
//   //   return state + 1
//   // } else if (action.type === 'add10') {
//   //   return state + action.payload
//   // } else if (action.type === 'add100') {
//   //   return state + action.payload
//   // } else {
//   //   return state
//   // }
//   switch (action.type) {
//     case 'add1':
//       return state + 1
//     case 'addN':
//       return state + action.payload
//     default:
//       return state
//   }
// }

// // store 
// const store = createStore(reducer)
// store.subscribe(() => {
//   console.log('数据变化了')
// })
// store.dispatch(actionAdd100)
// console.log(store.getState())

// 定义store
import { createStore } from 'redux'

// 创建reducer
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'sub1':
      return state - 1
    case 'addN':
      return state + action.payload
    default:
      return state
  }
}

const store = createStore(reducer)

export default store