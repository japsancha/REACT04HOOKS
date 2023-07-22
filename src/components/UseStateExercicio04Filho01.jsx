import React from 'react'

export default ({ diminuir, aumentar }) => {

  return (
    <>
      {/* <h3>Exercício 04 - Componente filho 01</h3> */}
      <button onClick={diminuir}> - </button>
      <button onClick={aumentar}> + </button>
    </>
  )
}