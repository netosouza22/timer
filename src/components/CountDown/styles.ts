import styled from 'styled-components'

// export const RotateTopCard = keyframes`
//   0% {

//     transform: translate3d(0);
//   }
//   50% {
//     transform:  translate3d(90deg);
//   }
//   100% {
//     transform: translate3d(180deg) ;
//   }
// `
// export const RotateBottomCard = keyframes`
//   0% {
//     transform: rotateX(180deg);
//   }
//   50% {
//     transform: rotateX(0);
//   }
//   100% {
//     transform: rotateX(180deg);
//   }
// `

export const CountdownContainer = styled.div`
  font-family: 'Roboto mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${({ theme }) => theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background: ${({ theme }) => theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  span:nth-child(3) {
    background: none;
    color: ${({ theme }) => theme['green-500']};
    padding: 2rem 0;

    overflow: hidden;
    width: 4rem;
    display: flex;
    justify-content: center;
  }
`
