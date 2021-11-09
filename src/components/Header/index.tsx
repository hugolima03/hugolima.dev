import React from 'react'

import Link from 'next/link'

import * as S from './styles'

const Logo = () => {
  return (
    <S.Logo>
      <p>Hugo L.</p>
    </S.Logo>
  )
}

const Header = () => {
  return (
    <S.HeaderWrapper>
      <Logo />
      <S.LinksWrapper>
        <Link href="/">
          <a>Portfólio</a>
        </Link>
        <Link href="https://github.com/hugolima03">
          <a target="_blank">Github</a>
        </Link>
        <Link href="/">
          <a>Blog</a>
        </Link>
      </S.LinksWrapper>
    </S.HeaderWrapper>
  )
}

export default Header
