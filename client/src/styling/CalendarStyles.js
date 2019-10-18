import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Cabin|Rubik&display=swap');
  
  body {
    padding: 0;
    margin: 0;
    font-family: 'Cabin', sans-serif;
  }
`

const CalendarContainer = styled.div`
    width: 375px;
    height: 300px;
    border: 1px solid gray;
    z-index: 3;
    position: relative;
`

const DayContainer = styled.span`
    width: 51px;
    height: 48px;
    border: 1px solid gray;
    z-index: 4,
    position: relative;
    color: blue
`


const DayContainer2 = styled(DayContainer)`
    color: gray;
`

const DaysTopBar = styled.span`
    font-weight: bold;
    color: gray;
`

const TopBarContainer = styled.div`
    width: 350px;
    height: 20px;
    margin-left: 28px;
    margin-top: 10px

`
const TopMost = styled(TopBarContainer)`
    margin-bottom: 20px;
    margin-top: 15px;
`

const MonthAndDate = styled.div`
    font-size: 18px;
    color: rgb(72, 72, 72);
    font-weight: bold;
    font-family: Cabin, sans-serif;
`
const TaxFeeWarning = styled.div`
    font-family: Cabin, sans-serif;
    color: rgb(118, 118, 118);
    width: 375px;
    font-size: 16px;
    margin-top: 30px;
    margin-bottom: 15px;
    margin-left: 12px;
`

const ClearDates = styled(TaxFeeWarning)`
  color: #008489
  margin-top: 0px;
`


export {ClearDates, TaxFeeWarning, TopMost, CalendarContainer, DayContainer, DayContainer2, DaysTopBar, TopBarContainer, MonthAndDate}