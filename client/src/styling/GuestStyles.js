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

const GuestCount = styled.span`
  font-size: 22px;
  color: rgb(72, 72, 72);
  font-family: Cabin, sans-serif;
  font-weight: 200;
  margin-left: 18px;
`

const Dropdown = styled.div`
    position: relative;
    display: block;
    z-index: 4;
    margin-top: 20px;
    border: 1px solid #EBEBEB;
    width: 325px;
    height: 100px;
    background-color: pink;
`

export {GuestCount, Dropdown}
