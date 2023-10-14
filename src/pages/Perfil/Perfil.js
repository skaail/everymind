import React from 'react'
import {  HImg, HInfo, INome, ImgImg, PCont, PDiv, PExp, PHeader, PMain } from './styles'
import userImg from './user.png'

function Perfil() {
  return (
    <PMain>
        <PCont>
            <PHeader>
                <HImg>
                    <ImgImg src={userImg} />
                </HImg>
                <HInfo>
                    
                    <INome>
                        <h1>Cleiton</h1>
                        <p>celiton@gmail.com</p>
                    </INome>
                    <p>Analista Sênior</p>
                    <p>33 anos</p>
                    
                </HInfo>
            </PHeader>
            <PDiv />
            <PExp>
                <p>Empresa de TI 1 - 5 anos</p>
                <p>Estágio na empresa 2 - 1 ano</p>
            </PExp>
        </PCont>
    </PMain>
  )
}

export default Perfil