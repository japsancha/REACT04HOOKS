import React from 'react'

export default ({ diminuir, aumentar }) => {

  return (
    <>
      {/* <h3>Exercício 05 - Componente filho para aumentar e diminuir</h3> */}
      <button onClick={diminuir}> - </button>
      <button onClick={aumentar}> + </button>
    </>
  )
}