import React from 'react'
import {SLayout, SMain} from '../Layout/styles'
import Navbar from "../../components/Navbar/Navbar"

export const Layout = ({children}) => {
  return (
    <SLayout>
      <Navbar />
      <SMain>{children}</SMain>
    </SLayout>
  )
}
