import { useState } from 'react'

export default () => {

  const [multiplicador, setMultiplicador] = useState(0)
  const [multiplicando, setMultiplicando] = useState(0)

  function diminuirMultiplicador() {
    setMultiplicador(v => v - 1)
  }

  function aumentarMultiplicador() {
    setMultiplicador(v => v + 1)
  }

  function diminuirMultiplicando() {
    setMultiplicando(function (v) { return v - 1 })
  }

  function aumentarMultiplicando() {
    setMultiplicando(v => v + 1)
  }

  return (
    <>
      <h4>Use State - Exercício 1</h4>
      <p>Multiplicador: {multiplicador}</p>
      <button onClick={diminuirMultiplicador}> - </button>
      <button onClick={aumentarMultiplicador}> + </button>
      <hr />
      <p>Multiplicando: {multiplicando}</p>
      <button onClick={diminuirMultiplicando}> - </button>
      <button onClick={aumentarMultiplicando}> + </button>
      <hr />
      <h4>Resultado de {multiplicador} x {multiplicando} = {multiplicador * multiplicando}</h4>
    </>
  )
}