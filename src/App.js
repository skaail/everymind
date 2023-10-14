import React from 'react'
import { Layout } from './pages/Layout/Layout'
import Rotas from './Routes'
import './index.css'

function App() {
  return (
    <>
        <Layout>
            <Rotas />
        </Layout>
    </>
  )
}

export default App