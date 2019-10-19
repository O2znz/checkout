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


const InfantsBlurb = styled.div`
    text-size: 15 px;
    margin: 5px;
    border: 1px solid blue;

`
const AgeBlock = styled.div`
    height: 50px;
    border: 1px solid blue;
    margin: 5px;

`

const CloseButton = styled.div`
    text-size: 15 px;
    margin: 5px;
    border: 1px solid blue;
`

const PlusButton = styled.button`
    border-radius: 50%;
    color: blue;
    border-color: blue;
    background-color: #fff
`

export {GuestCount, AgeBlock, CloseButton, InfantsBlurb, PlusButton}
