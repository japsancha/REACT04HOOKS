import { useState } from 'react'

export default () => {

  const cliente = {
    nome: '',
    apelido: '',
    cidade: '',
    email: '',
  }

  const [clientes, setClientes] = useState(cliente)

  return (
    <>
      <h3>Exercício 06</h3>
      <hr />
      <ul>
        <li>Nomes: {clientes.nome}</li>
        <li>Apelido: {clientes.apelido}</li>
        <li>Cidade: {clientes.cidade}</li>
        <li>E-mail: {clientes.email}</li>
      </ul>
      <hr />
      {/* botão nome */}
      <button onClick={() => {
        const c = { ...clientes }
        c.nome = 'Joaquim'
        setClientes(c)
      }}>nome</button>

      {/* Botão apelido */}
      <button onClick={() => {
        const c = { ...clientes }
        c.apelido = 'Sancha'
        setClientes(c)
      }}>apelido</button>

      {/* botão cidade */}
      <button onClick={() => {
        const c = { ...clientes }
        c.cidade = 'Praia'
        setClientes(c)
      }}>cidade</button>

      {/* botão email */}
      <button onClick={() => {
        const c = { ...clientes }
        c.email = 'js@mail.cv'
        setClientes(c)
      }}>email</button>
    </>
  )
}