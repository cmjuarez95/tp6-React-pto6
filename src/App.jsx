import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './components/Footer.jsx'
import Formulario from './components/Formulario.jsx'
import ListaCards from './components/ListaCards.jsx'

function App() {
  

  return (
    <>
    <main className='container'>
      <Formulario></Formulario>
      
    </main>
      <Footer></Footer>
    </>
  )
}

export default App
