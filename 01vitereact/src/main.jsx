import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'

// const reactElement = {
//     type : 'a',
//     props : {
//         href : 'https://google.com',
//         target: '_blank'
//     },
//     children : 'Click me to visit google'
// }

const anotherElement= (
  <a href='https://google.com' target='_blank'>vist google</a>
)

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target : '_blank'},
    'click me to visit googl e'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
