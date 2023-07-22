import Contador from './UseStateExercicio02'
import './UseStateExercicioContador.css'

export default () => {
  return (
    <>
      <h4>Use State - Exercício 2</h4>
      <h6>Diminuir ou aumentar de acordo com o parâmetro</h6>
      <div className="layout">
        <Contador passo={1} />
        <Contador passo={5} />
        <Contador passo={10} />
      </div>
    </>
  )
}