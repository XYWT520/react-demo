const data = [
  {
    id: 1, name: '读书', isDone: true,
  },
  {
    id: 2, name: '写字', isDone: false
  }
]
export default function todos (state = data, { type, payload }) {
  console.log(type, payload)
  switch (type) {
    case 'todos/delete':
      return state.filter(item => item.id !== payload)
    case 'todos/editDone':
      return state.map(item => item.id === payload.id ? { ...item, isDone: payload.isDone } : item)
    case 'todos/add':
      return [...state, {
        id: Date.now(),
        name: payload,
        isDone: false
      }]
    case 'todos/setDoneAll':
      return state.map(item => ({ ...item, isDone: payload }))
    case 'todos/edieName':
      return state.map(item => item.id === payload.id ? { ...item, name: payload.name } : item)
    case 'todos/clearFinish':
      return state.filter(item => !item.isDone)
    default:
      return state
  }
}