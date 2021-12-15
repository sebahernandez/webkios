import styled from 'styled-components'
import { BounceAnimation } from './loading.animation'

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  height:100vh;
`

export const Dot = styled.div<Props>`
  background-color: black;
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.25rem;
  /*Animation*/
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`