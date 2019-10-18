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

const Text = styled.span`
    font-size: 22px;
`

const Checkin = styled(Text)`
    margin-left: 16px;
    color: rgb(118, 118, 118);
    font-family: Cabin, sans-serif;
`

const Checkout = styled(Text)`
    margin-right: 16px;
    color: rgb(118, 118, 118);
    font-family: Cabin, sans-serif;
`

const Arrow = styled(Text)`
    color: rgb(72, 72, 72);  
`

export {Checkin, Checkout, Arrow}
