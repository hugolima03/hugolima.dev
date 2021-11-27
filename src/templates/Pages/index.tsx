import React from 'react'
import Image from 'next/image'

import * as S from './styles'
import BackButton from 'components/BackButton'

interface PageTemplateProps {
  heading: string
  tags: string[]
  description: string
  visitUrl: string
  image: {
    url: string
    width: string
    height: string
  }
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  heading,
  description,
  tags,
  image,
  visitUrl
}) => {
  console.log(image)
  return (
    <S.Wrapper>
      <S.ImageContainer>
        <Image
          src={image.url}
          width={image.width}
          height={image.height}
          objectPosition="center top"
          objectFit="cover"
        />
      </S.ImageContainer>

      <S.SideContainer>
        <BackButton />

        <S.TagsWrapper style={{ marginTop: 24 }}>
          <p>
            {tags.map((tag) => {
              return `#${tag} `
            })}
          </p>
        </S.TagsWrapper>

        <h1>{heading}</h1>

        <S.Description>{description}</S.Description>

        {visitUrl && (
          <S.BigButton href={visitUrl} target="_blank" rel="norefer">
            VISITAR
          </S.BigButton>
        )}
      </S.SideContainer>
    </S.Wrapper>
  )
}

export default PageTemplate
