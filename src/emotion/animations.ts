import { keyframes } from 'emotion';

const bounceHeight = 10;

// eslint-disable-next-line import/prefer-default-export
export const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -${bounceHeight}px, 0);
  }

  70% {
    transform: translate3d(0, -${bounceHeight / 2}px, 0);
  }

  90% {
    transform: translate3d(0, -${bounceHeight / 4}px, 0);
  }
`;
