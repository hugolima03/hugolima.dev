import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  max-height: 900px;

  background: radial-gradient(
    92.01% 92.01% at 50% 7.99%,
    #231e43 0,
    #191630 86.98%,
    #15103e 100%
  );
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  width: var(--container);
`

export const ContentWrapper = styled.div`
  display: grid;
  height: 100%;
  align-items: center;
  grid-template-columns: 40% 60%;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
