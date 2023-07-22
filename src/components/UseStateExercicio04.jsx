import { useState } from 'react'
import Filho01 from './UseStateExercicio04Filho01'
import Filho02 from './UseStateExercicio04Filho02'

export default () => {

  const [parcela01, setParcela01] = useState(0)
  const [parcela02, setParcela02] = useState(0)

  function diminuirParcela01() {
    console.log('entrei no diminuir parcela 02')
    setParcela01(oldValue => oldValue - 5)
  }

  function aumentarParcela01() {
    setParcela01(oldValue => oldValue + 5)
  }

  function diminuirParcela02() {
    console.log('entrei no diminuir parcela 02')
    setParcela02(oldValue => oldValue - 10)
  }

  function aumentarParcela02() {
    setParcela02(oldValue => oldValue + 10)
  }


  return (
    <>
      <h3>Exercício 04 - Componente pai</h3>
      <h3>Soma: <strong>{parcela01}</strong> + <strong>{parcela02}</strong> = <strong>{parcela01 + parcela02}</strong></h3>
      {/* <h3>parcela 1: <strong>{parcela01}</strong></h3> */}
      {/* <h3>parcela 2: <strong>{parcela02}</strong></h3> */}
      <hr />
      <Filho01 diminuir={diminuirParcela01} aumentar={aumentarParcela01} />
      &nbsp;
      <Filho02 aumentar={aumentarParcela02} diminuir={diminuirParcela02} />
    </>
  )
}