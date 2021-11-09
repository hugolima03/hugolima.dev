import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 50px;
`

export const Logo = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;

  width: 100%;
  max-width: 170px;
  height: 100%;

  background: linear-gradient(89.96deg, #fa3667 -59.94%, #ff3366 194.9%);
  box-shadow: 0px 0px 22px 10px rgba(250, 54, 103, 0.25);

  p {
    font-size: 1.8rem;
    font-weight: 700;
    color: white;
  }

  cursor: pointer;
`

export const LinksWrapper = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  a {
    font-size: 1.6rem;
    font-weight: 400;
    color: white;
  }

  a + a {
    margin-left: 24px;
  }
`
