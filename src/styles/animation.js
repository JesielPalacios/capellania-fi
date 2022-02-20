import { keyframes, css } from 'styled-components'

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`

const fadeInMovingKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
    margin-top: -500px
  }

  to {
    filter: blur(0);
    opacity: 1;
    margin-top: 0px
  } 
`

const fadeInMovingKeyframes2 = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }

  /* 0%   {left:0px; top:-30px;} */
  /* 25%  {left:0px; top:-27px;} */
  /* 50%  {left:0px; top:-25px;} */
  /* 75%  {left:0px; top:-23px;} */
  /* 100% {left:0px; top:-20px;} */

  /* 0%   {left:0px; top:-27px;} */
  /* 25%  {left:0px; top:-15px;} */
  /* 100% {left:0px; top:-20px;} */

  0%   {left:0px; top:-40px;}
  25%  {left:0px; top:0px;}
  100% {left:0px; top:-20px;}
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `

export const fadeInMoving = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeInMovingKeyframes2} ${type};
  `
