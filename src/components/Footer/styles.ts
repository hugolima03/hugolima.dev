import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  height: 200px;
  width: 100%;
`

export const Contact = styled.div`
  display: flex;
  flex-direction: column;

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 8px;

    p {
      font-size: 18px;
      font-weight: 400;
      color: white;
      margin-left: 8px;
      line-height: 24px;
    }
  }
`

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  strong {
    font-size: 18px;
    font-weight: 700;
    color: white;

    margin-bottom: 12px;
  }

  span {
    a + a {
      margin-left: 14px;
    }
    cursor: pointer;

    margin-bottom: 12px;
  }

  small {
    font-size: 14px;
    font-weight: 400;
    color: #c4c4c4;
  }
`
