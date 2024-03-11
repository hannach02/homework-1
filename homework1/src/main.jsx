import React from 'react'
import ReactDOM from 'react-dom/client'
import Greet from './Greet.jsx'
import './index.css'
import Capybara from './capybara.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greet />
    <Capybara/>
  </React.StrictMode>,
)
