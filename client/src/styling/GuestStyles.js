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


const MenuOptions = styled.span`
  font-size: 19px;
  color: rgb(72, 72, 72);
  font-family: Cabin, sans-serif;
  font-weight: 400;
  margin-left: 18px;
`

const SubOptions = styled.span`
    font-size: 21px;
    color: rgb(72, 72, 72);
    font-family: Cabin, sans-serif;
    font-weight: 400;
    margin-left: 18px;
    padding-top: 5px;
`

const SubSubOptions = styled(SubOptions)`
    font-size: 18px;
    font-weight: 200;
    padding-bottom: 15px
`
const SubOptions2 = styled(SubOptions)`
    font-size: 21px;
    color: rgb(72,72,72);
    font-family: Cabin,sans-serif;
    font-weight: 400;
    margin-top: 10px;
    margin-left: 20px;
`


const InfantsBlurb = styled.div`
    margin-top: 60px;
    margin-left: 18px;
    font-family: Cabin, sans-serif;
    color: rgb(72, 72, 72);
    font-size: 18px;
    font-weight: 200;
`
const AgeBlock = styled.div`
    height: 50px;
    margin-right: 15px;
`

const CloseButton = styled.div`
    margin-right: 15px;
    margin-top: 10px;
    color: #008489;
    text-size: 16px;
    font-family: Cabin, sans-serif;
    :hover {
        text-decoration: underline
    }
`

const PlusButton = styled.button`
    border-radius: 50%;
    color: #008489;
    border-color: #008489;
    width: 42px;
    height: 42px;
    background-color: #fff;
    margin: 5px 5px 15px 5px;
    font-size: 30px;
    font-weight: 100;
`

const Numbers = styled.span`
  font-size: 21px;
  margin: 0px 8px 0px 8px;
`

export {SubOptions2, Numbers, GuestCount, AgeBlock, CloseButton, InfantsBlurb, PlusButton, MenuOptions, SubOptions, SubSubOptions}
