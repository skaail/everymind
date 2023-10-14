import React from 'react'
import { NItem, NLink, NMain } from './styles'

function Navbar() {
  return (
    <NMain>
        <NItem>
            <NLink>Logo</NLink>
        </NItem>

        <NItem>
            <NLink>Home</NLink>
        </NItem>

        <NItem>
            <NLink>Sobre Nós</NLink>
        </NItem>

        <NItem>
            <NLink>Pesquisar Vagas</NLink>
        </NItem>

        <NItem>
            <NLink>Meu Perfil</NLink>
        </NItem>
    </NMain>
  )
}

export default Navbar