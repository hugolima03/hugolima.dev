import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  max-width: 450px;
  cursor: pointer;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: -50px;
  bottom: 10px;
  z-index: 2;

  max-width: 140px;

  h1 {
    font-size: 30px;
    font-weight: 700;
    color: white;
    text-shadow: 0px 0px 8px #000000ad;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    color: white;
    line-height: 21px;
    text-shadow: 0px 0px 8px #000000ad;
  }

  hr {
    width: 100%;
    height: 2px;
    background-color: white;
    border: none;
    margin: 8px 0;
    box-shadow: 0px 0px 8px #000000ad;
  }
`

interface ImageContainer {
  type: 'web' | 'mobile'
}

export const ImageContainer = styled.div<ImageContainer>`
  border-radius: 12px;
  position: relative;

  width: ${(props) => (props.type === 'web' ? `410px` : `230px`)};
  height: ${(props) => (props.type === 'web' ? `230px` : `410px`)};
  max-width: ${(props) => (props.type === 'web' ? `410px` : `230px`)};
  max-height: ${(props) => (props.type === 'web' ? `230px` : `410px`)};

  img {
    border-radius: 12px;
  }

  background-color: gray;
`

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background: linear-gradient(
    89.3deg,
    rgba(16, 9, 27, 0.8) -32.81%,
    rgba(0, 0, 0, 0) 155.96%
  );
  background-blend-mode: darken;
  border-radius: 12px;
  z-index: 1;
`
