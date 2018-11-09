import styled from 'styled-components'
import theme from 'theme'

const LoadingWrapper = styled.div`
  z-index: 1046;

  .circular {
    animation: rotate 3s linear infinite;
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  .path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dashTransition 1.5s ease-in-out infinite,
      colorTransition 6s ease-in-out infinite;
    stroke-linecap: round;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dashTransition {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
    }
  }

  @keyframes colorTransition {
    100%,
    0% {
      stroke: ${theme.loading.green};
    }
    40% {
      stroke: ${theme.loading.blue};
    }
    66% {
      stroke: ${theme.loading.red};
    }
    80%,
    90% {
      stroke: ${theme.loading.yellow};
    }
  }
`

const Loader = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100px;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`

export { LoadingWrapper, Loader }
