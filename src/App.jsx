import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './components/Footer.jsx'
import Formulario from './components/Formulario.jsx'

function App() {
  

  return (
    <>
    <main className='container'>
      <p>Hola mundo</p>
      <Formulario></Formulario>
    </main>
      <Footer></Footer>
    </>
  )
}

export default App
