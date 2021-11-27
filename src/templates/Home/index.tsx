import React, { useState } from 'react'
import Header from 'components/Header'

import { Github, Linkedin } from '@styled-icons/boxicons-logos/'

import * as S from './styles'
import PortfolioItem from 'components/PortfolioItem'
import Footer from 'components/Footer'

interface HomeTemplateProps {
  projects: {
    id: string
    heading: string
    slug: string
    projectType: string
    image: {
      id: string
      url: string
      width: string
      height: string
    }
  }[]
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({ projects }) => {
  const [webProjects] = useState(
    projects.filter((e) => e.projectType === 'web')
  )

  const [mobileProjects] = useState(
    projects.filter((e) => e.projectType === 'mobile')
  )

  return (
    <S.Wrapper>
      <S.HeroContainer>
        <Header />

        <S.ContentWrapper>
          <S.TextWrapper>
            <h1 className="noselect">
              HUGO LIMA <strong>WEB DEVELOPER</strong>
            </h1>

            <p>Com vocês, meu humilde portfólio!</p>

            <span>
              <a
                href="https://github.com/hugolima03"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={32} fill="white" />
              </a>
              {/* <a href="">
                <Twitter size={32} fill="white" />
              </a> */}
              <a
                href="https://www.linkedin.com/in/hugo-lima-5aa2761b4/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={32} fill="white" />
              </a>
            </span>
          </S.TextWrapper>
        </S.ContentWrapper>
      </S.HeroContainer>

      {/* <S.AboutMeWrapper>
        <S.AboutMeContainer>
          <Image
            src="/img/hugo.png"
            alt="Minha foto"
            width={300}
            height={300}
          />

          <S.AboutMeInfo>
            <strong>Sobre Mim</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem provident dolore accusamus dignissimos incidunt et,
              unde vero libero esse veritatis beatae non, perferendis, quisquam
              omnis assumenda. Explicabo porro delectus laboriosam!
            </p>
          </S.AboutMeInfo>
        </S.AboutMeContainer>
      </S.AboutMeWrapper> */}

      <S.PortfolioWrapper id="portfolio">
        <S.PortfolioHeader>
          <p>Portfólio</p>
          <h1>Websites, apps mobile e outros projetos...</h1>
        </S.PortfolioHeader>

        <S.WebLabel>
          <h1 className="colorful noselect">WEB</h1>
        </S.WebLabel>

        <S.WebGrid>
          {webProjects.map((project) => {
            return (
              <PortfolioItem
                project={project}
                type="web"
                key={project.id}
                slug={project.slug}
              />
            )
          })}
        </S.WebGrid>

        <S.MobileLabel>
          <h1 className="colorful noselect">MOBILE</h1>
        </S.MobileLabel>

        <S.MobileGrid>
          {mobileProjects.map((project) => {
            return (
              <PortfolioItem
                project={project}
                type="mobile"
                key={project.id}
                slug={project.slug}
              />
            )
          })}
        </S.MobileGrid>
      </S.PortfolioWrapper>

      <Footer />
    </S.Wrapper>
  )
}

export default HomeTemplate
