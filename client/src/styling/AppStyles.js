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

const DatesAndGuests = styled.span`
    margin-left: 5px;
    font-family: Cabin, sans-serif;
    color: #484848;
    font-size: 12px;
    font-weight: 600;
`



export {DatesAndGuests}
