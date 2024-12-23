import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'


function MyApp(){
    
    return (
        <div>
            <h3> custome react </h3>
        </div>
    )
}

const anotheruser = "chai our react"

const otherElement = (
    <a href="https://google.com" target='_blank'>visit google</a>
)

const reactElement = React.createElement(
    'a',
    {href:"https://google.com", target:'_blank' },
    'click me to visit google',
    anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement

  
)
