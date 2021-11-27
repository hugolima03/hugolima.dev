import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { LeftArrowAlt } from '@styled-icons/boxicons-regular'

import * as S from './styles'

const BackButton = () => {
  const router = useRouter()

  function handleBackButton() {
    router.back()
  }

  return (
    <S.BackButton onClick={handleBackButton}>
      <LeftArrowAlt size={32} fill="white" />
    </S.BackButton>
  )
}

export default BackButton
