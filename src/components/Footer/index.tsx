import React from 'react'
import { Phone, MailSend } from '@styled-icons/boxicons-regular/'
import { Github, Linkedin } from '@styled-icons/boxicons-logos/'

import * as S from './styles'

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.Contact>
        <div className="item">
          <Phone size={24} fill="white" />
          <p>95 99147-0215</p>
        </div>
        <div className="item">
          <MailSend size={24} fill="white" />
          <p>hugo8romao@gmail.com</p>
        </div>
      </S.Contact>

      <S.SocialMedia>
        <strong>Social Media</strong>

        <span>
          <a
            href="https://github.com/hugolima03"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={32} fill="white" />
          </a>
          {/* <Twitter size={32} fill="white" /> */}
          <a
            href="https://www.linkedin.com/in/hugo-lima-5aa2761b4/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={32} fill="white" />
          </a>
        </span>

        <small>
          Desenvolvido com{' '}
          <span role="img" aria-label="emoji" style={{ cursor: 'default' }}>
            ❤️
          </span>{' '}
          e NextJS{' '}
        </small>
      </S.SocialMedia>
    </S.FooterWrapper>
  )
}

export default Footer
