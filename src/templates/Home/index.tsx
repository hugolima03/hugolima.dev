import Header from 'components/Header'
import React from 'react'

import { Github, Twitter, Linkedin } from '@styled-icons/boxicons-logos/'

import * as S from './styles'

const HomeTemplate = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Header />

        <S.ContentWrapper>
          <S.TextWrapper>
            <h1>
              HUGO LIMA <strong>WEB DEVELOPER</strong>
            </h1>
            <p>Com vocês, meu humilde portfólio!</p>

            <span>
              <Github size={24} />
              <Twitter size={24} />
              <Linkedin size={24} />
            </span>
          </S.TextWrapper>
        </S.ContentWrapper>
      </S.Container>
    </S.Wrapper>
  )
}

export default HomeTemplate
