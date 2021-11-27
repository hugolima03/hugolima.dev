import React, { useRef, useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'
import Image from 'next/image'

import * as S from './styles'
import { useRouter } from 'next/dist/client/router'

interface PortfolioItemProps {
  type: 'web' | 'mobile'
  project: {
    id: string
    heading: string
    slug: string
    projectType: string
    tags: string[]
    image: {
      id: string
      url: string
      width: string
      height: string
    }
  }
  slug: string
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  type,
  project,
  slug
}) => {
  const tilt = useRef(null)

  useEffect(() => {
    const options = {
      scale: 1.2,
      speed: 300,
      max: 30
    }

    VanillaTilt.init(tilt.current, options)
  }, [])

  const router = useRouter()

  return (
    <S.Container ref={tilt} onClick={() => router.push(`/${slug}`)}>
      <S.Info>
        <h1>{project.heading}</h1>
        <hr />

        <p>00</p>
        <p>#{project.tags[0]}</p>
      </S.Info>
      <S.ImageContainer type={type}>
        <Image
          src={project.image.url}
          width={project.image.width}
          height={project.image.height}
          layout="fill"
          objectFit="cover"
        />
        <S.Overlay />
      </S.ImageContainer>
    </S.Container>
  )
}

export default PortfolioItem
