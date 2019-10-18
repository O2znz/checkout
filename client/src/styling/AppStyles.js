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

const ChargeWarning = styled.div`
    margin-top: 5px;
    margin-bottom: 20px;
    font-family: Cabin, sans-serif;
    color: #484848;
    font-size: 12px;
    font-weight: 600;
`

const ReserveButton = styled.button`
  background: rgb(255, 90, 95);
  color: #ffffff;
  text-align: center;
  border-radius: 4px;
  width: 390px;
  padding: 15px;
  font-size: 18px
  margin-top: 15px;
`

const Line = styled.div`
  color: #EBEBEB;
  border-top: 1px solid;
  width: 385px;
  margin: 10px;
`
const Attention = styled.div`
  font-family: Cabin, sans-serif;
  color: #484848;
  font-weight: 800;
  margin-top: 10px;
  margin-left: 10px;
`

const Views = styled.div`
  font-family: Cabin, sans-serif;
  color: #484848;
  font-weight: 400;
  margin-top: 10px;
  margin-left: 10px;
`

export {DatesAndGuests, ChargeWarning, ReserveButton, Line, Attention, Views}
