import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'

// store.subscribe(() => {
//   console.log('更新了');
//   ReactDOM.createRoot(document.getElementById('root')).render(
//     <Router>
//       <App />
//     </Router>
//   )
// })

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)
