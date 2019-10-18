import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Cabin|Rubik&display=swap');
  
  body {
    padding: 0;
    margin: 0;
    font-family: 'Cabin', sans-serif;
  }
`

const RatingStyle = styled.span`
  font-size: 14px;
  color: #312B2B;
  font-weight: bold;
  padding-left: 10px;
`

const ReviewStyle = styled.span`
  font-size: 14px;
  color: #979696;
`


export {RatingStyle, ReviewStyle}
