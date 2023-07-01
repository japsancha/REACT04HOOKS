import { useState } from 'react'
import Filho from './UseStateExercicio03Filho'

export default () => {

  const [valor, setValor] = useState(0)

  function actualizarValor() {
    setValor(1000)
  }


  return (
    <>
      <h3>Exercício 03 - Componente pai</h3>
      <h3>Valor: <strong>{valor}</strong></h3>
      <hr />
      <Filho funcao={actualizarValor} />
    </>
  )
}