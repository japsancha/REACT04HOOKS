import { useState } from 'react'
import IncrementDecrement from './UseStateExercicio05IncDec'

export default () => {

  const [valores, setValores] = useState([0, 0, 0])
  const dec = -1
  const inc = 1

  function alteraValores(indice, incDec) {
    const tempArray = [...valores]     // copia o array valores
    tempArray[indice] = tempArray[indice] + incDec  // altera o valor do array no indice indicado
    setValores(tempArray)   // altera o estado do array valores
  }

  function diminuirValorIndice01() {
    alteraValores(0, dec)
  }

  function aumentarValorIndice01() {
    alteraValores(0, inc)
  }

  function diminuirValorIndice02() {
    alteraValores(1, dec)
  }

  function aumentarValorIndice02() {
    alteraValores(1, inc)
  }

  function diminuirValorIndice03() {
    alteraValores(2, dec)
  }

  function aumentarValorIndice03() {
    alteraValores(2, inc)
  }


  return (
    <>
      <h3>Exercício 05 - Componente principal</h3>
      <p>Valores: {valores}</p>
      <ul>
        <li>{valores[0]}</li>
        <li>{valores[1]}</li>
        <li>{valores[2]}</li>
      </ul>
      <hr />
      <IncrementDecrement diminuir={diminuirValorIndice01} aumentar={aumentarValorIndice01} />
      &nbsp;
      <IncrementDecrement diminuir={diminuirValorIndice02} aumentar={aumentarValorIndice02} />
      &nbsp;
      <IncrementDecrement diminuir={diminuirValorIndice03} aumentar={aumentarValorIndice03} />
    </>
  )
}