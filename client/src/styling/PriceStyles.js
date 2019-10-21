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

const PerNight = styled.span`
  font-size: 12px;
  color: #484848;
  font-family: Cabin, sans-serif;
  font-weight: 650
`

const NightlyRate = styled.span`
  font-size: 22px;
  color: #484848;
  padding-left: 10px;
  font-family: Cabin, sans-serif;
  font-weight: 650
  margin-right: 4px
`



export {NightlyRate, PerNight}
