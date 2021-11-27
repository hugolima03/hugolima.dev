import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr minmax(auto, 400px);

  flex-direction: row;
`

export const ImageContainer = styled.div`
  display: flex;
  overflow: hidden;
  height: 100vh;

  img {
    width: 100%;
  }
`

export const SideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100vh;

  background: radial-gradient(
    92.01% 92.01% at 50% 7.99%,
    #231e43 0,
    #191630 86.98%,
    #15103e 100%
  );

  padding: 40px;

  h1 {
    font-size: 48px;
    font-weight: 700;
    color: white;
    font-family: 'Sora';

    margin-bottom: 24px;
  }
`

export const Description = styled.p`
  font-family: 16px;
  font-size: 16px;
  font-weight: 400;
  color: white;
  font-family: 'Sora';
  /* line-height: 16px; */
`

export const TagsWrapper = styled.span`
  display: flex;
  flex-direction: row;

  p {
    color: white;
    font-size: 18px;
    font-weight: 100;
    font-family: 'Encode Sans', sans-serif;
  }
`

export const BigButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 100px;

  border-radius: 50%;

  background-color: rgba(250, 54, 103, 1);
  box-shadow: 0px 0px 22px 10px rgba(250, 54, 103, 0.25);
  border: none;
  outline: none;

  margin-top: 80px;

  color: white;
  font-size: 18px;
  font-weight: 700;

  cursor: pointer;

  font-family: 'Sora', sans-serif;

  text-decoration: none;

  transition: all 0.4s;

  &:hover {
    transform: scale(1.2);
  }
`
