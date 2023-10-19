import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import List from './List.jsx'
import TodoList from './TodoList.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoList />

    <List />

  </React.StrictMode>,
)
