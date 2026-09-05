import { useState } from 'react'

import './App.css'
import Header from './layout/Header'
import Button from './components/Button/Button'

function App() {

  const persona = {
    nombre: 'Fabian Gaxiola'
  }

  const [count, setCount] = useState(0)

  // let contador = 0;
  function contarClickHandler() {
    setCount(count + 1)
  }

  function doOnButtonClick() {
    console.log('Click!')
  }

  return (
    <>
      <Header />
      <h1>Hola {persona.nombre ? persona.nombre : 'persona'}</h1>
      <h2>lorem ipsum</h2>
      {/* <button onClick={() => contador++}>Cuenta: {contador}</button> */}
      <button onClick={ contarClickHandler }>Cuenta: { count }</button>
      <Button texto="Click me!" clickHandler={ doOnButtonClick }/>
    </>
  )
}

export default App;
