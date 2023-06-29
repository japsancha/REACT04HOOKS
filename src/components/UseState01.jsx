import { useState } from 'react'

export default () => {

  const [valor, setValor] = useState(0)
  const val = 5

  function diminuir() {
    setValor(v => v - 1)
  }

  function aumentar() {
    setValor(v => v + 1)
  }

  function diminuirValor(val) {
    setValor(v => v - val)
  }

  return (
    <>
      <h4>Use State</h4>
      <p>Valor: {valor}</p>
      <button onClick={() => diminuirValor(val)}>Diminuir Valor {val}</button>
      <button onClick={diminuir}>Diminuir</button>
      <button onClick={aumentar}>Aumentar</button>
    </>
  )
}