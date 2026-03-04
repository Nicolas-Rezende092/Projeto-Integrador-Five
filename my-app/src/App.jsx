import BoasVindas from './Componets/BoasVindas'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function mostrarMensagem() {
    alert('Bem-vindo ao React!')
  }

  return (
    <div>
      <BoasVindas />
      <button onClick={mostrarMensagem}>
        Mostrar Mensagem
      </button>
    </div>
  )
}

export default App
