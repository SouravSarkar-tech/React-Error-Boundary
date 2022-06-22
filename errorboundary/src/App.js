import React from 'react'
import './App.css'
import ErrorHandler from './Components/ErrorHandler'
import Counter from './Components/Counter'
import Error from './Components/Error'
const App = () => {
  return (
    <div className="App">
      <h1>Small Example On Error Boundary</h1>
      <ErrorHandler>
      <Error name="Sourav" />
      </ErrorHandler>
      <ErrorHandler>
      <Counter/>
      </ErrorHandler>
      </div>
  )
}

export default App