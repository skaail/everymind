import React from 'react'
import { HBanner, HHeader, HImage, HMain, HText, HTextInside } from './styles'
import homeImage from './homeImage.jpg'

export const Home = () => {
  return (
    <HMain>
      <HHeader>Começe a modernizar a estrutura digital do seu negócio</HHeader>
      <HBanner>
        <>
        <HText>
          <HTextInside>
              <h1>O que fazemos?</h1>
              <p>A equipe Everymind é formada por mais de 250 pessoas com experiências e jornadas diferentes. Essa mistura de aptidões, culturas e expertise técnica garantem que a sua experiência, como cliente e parceiro, seja a melhor.</p>
          </HTextInside>
        </HText>
        <HImage src={homeImage}></HImage>
        </>
      </HBanner>
    </HMain>
  )
}
