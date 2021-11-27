import styled from 'styled-components'

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  border-radius: 50%;
  background-color: rgba(250, 54, 103, 1);
  box-shadow: 0px 0px 22px 10px rgba(250, 54, 103, 0.25);

  border: none;
  outline: none;

  cursor: pointer;

  transition: all 0.4s;

  &:hover {
    transform: scale(1.2);
  }
`
