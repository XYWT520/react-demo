export default function filter (state = 'all', action) {
  switch (action.type) {
    case 'filter/mod':
      return action.payload
    default:
      return state
  }
}
