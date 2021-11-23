import React from "react"
import ReactDOM from "react-dom"
import "./src/style.css"

function primeiroJSX() {
    return (
        <div>
            Victor Hugo - Introdução ao ReactJS
        </div>
    )
}

const App = () => {
    return (
        <div className="App">
            {primeiroJSX()}
        </div>
    )car
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)