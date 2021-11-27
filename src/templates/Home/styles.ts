import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* max-height: 900px; */

  background: radial-gradient(
    92.01% 92.01% at 50% 7.99%,
    #231e43 0,
    #191630 86.98%,
    #15103e 100%
  );

  overflow: auto;
`

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 900px;

  width: var(--container);

  @media (max-width: 375px) {
    width: 340px;
    height: 600px;
  }
`

export const ContentWrapper = styled.div`
  display: grid;
  height: 100%;
  align-items: center;
  grid-template-columns: 50% 50%;

  @media (max-width: 375px) {
    grid-template-columns: 1fr;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 72px;
    font-weight: 700;
    color: white;

    font-family: 'Sora';

    @media (max-width: 375px) {
      font-size: 42px;
    }
  }

  p {
    font-size: var(--medium);
    font-weight: 700;
    color: white;

    @media (max-width: 375px) {
      font-size: 24px;
    }
  }

  strong {
    background: linear-gradient(96.21deg, #ec68f4 2.57%, #ff904e 44.72%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  span {
    margin-top: 24px;

    a {
      cursor: pointer;
    }

    a + a {
      margin-left: 12px;
    }
  }
`

export const PortfolioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding-top: 80px;

  position: relative;
`

export const PortfolioHeader = styled.header`
  width: var(--container);
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-bottom: 46px;

  p {
    font-size: 18px;
    font-weight: 400;
    color: white;
    font-family: 'Encode Sans', sans-serif;
  }

  h1 {
    font-size: 32px;
    font-weight: 400;
    color: white;
    font-family: 'Encode Sans', sans-serif;
  }
`

export const WebLabel = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;

  h1.colorful {
    font-size: 180px;
    font-weight: 700;
    color: white;
    background: linear-gradient(249.78deg, #ff5982 -4.06%, #ff904e 93.85%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;

    font-family: 'Sora';

    position: absolute;
    right: 0;
    top: -80px;
  }
`

export const MobileLabel = styled.section`
  display: flex;
  flex-direction: column;

  h1.colorful {
    font-size: 180px;
    font-weight: 700;
    color: white;
    background: linear-gradient(96.21deg, #79e2ff 2.57%, #ec68f4 96.67%);

    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;

    font-family: 'Sora';
  }
`

export const WebGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: var(--container);
  gap: 50px;

  align-self: center;
`

export const MobileGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: var(--container);
  gap: 50px;

  align-self: center;

  margin-bottom: 400px;
`

export const AboutMeWrapper = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: white;
`

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const AboutMeInfo = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 48px;

  strong {
    font-size: 38px;
    font-weight: 700;
    color: black;
    margin-bottom: 12px;
  }

  p {
    text-indent: 20px;
    max-width: 350px;
    font-size: 18px;
    font-weight: 400;
    color: black;
  }
`

export const ImageSlider = styled.div`
  img {
    display: block;
    width: 100%;
  }

  section {
    width: 100%;
    overflow: hidden;
  }

  article {
    display: flex;
    width: 200%;
    animation: bannermove 20s linear infinite;
  }

  article.paused {
    -webkit-animation-play-state: paused;
    animation-play-state: paused;
  }

  div {
    width: 100%;
  }

  ul {
    display: flex;
    background: red;
    list-style-type: none;
    padding-left: 0;
    margin: 0;
  }

  li {
    width: 100%;
    background: blue;
  }

  li:nth-child(2) {
    background: green;
  }

  li:nth-child(3) {
    background: yellow;
  }

  @keyframes bannermove {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`
