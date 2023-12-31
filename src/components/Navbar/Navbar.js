import React from 'react'
import { NItem, NLink, NMain } from './styles'

function Navbar() {
  return (
    <NMain>
        <NItem>
            <NLink>Logo</NLink>
        </NItem>

        <NItem>
            <NLink href='/'>Home</NLink>
        </NItem>

        <NItem>
            <NLink>Sobre Nós</NLink>
        </NItem>

        <NItem>
            <NLink>Pesquisar Vagas</NLink>
        </NItem>

        <NItem>
            <NLink href='/perfil'>Meu Perfil</NLink>
        </NItem>
    </NMain>
  )
}

export default Navbar