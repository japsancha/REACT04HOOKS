import { useState } from 'react'

export default ({ passo }) => {

  const [valor, setValor] = useState(0)

  function diminuirValor() {
    setValor(oldValue => oldValue - passo)
  }

  function aumentarValor() {
    setValor(oldValue => oldValue + passo)
  }

  return (
    <>
      <p>Valor: {valor}</p>
      <p>Passo: {passo}</p>
      <button onClick={diminuirValor}> - </button>
      <button onClick={aumentarValor}> + </button>
    </>
  )
}