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
    border: hidden;
    z-index: 3;
    position: relative;
`

const DayContainer = styled.span`
    width: 51px;
    height: 41px;
    z-index: 4,
    position: relative;
    color: rgb(0, 132, 137);
    padding-top: 15px;
    font-weight: 500;
    font-family: Cabin, sans-serif;
    :hover {
        border-radius: 50%;
        width: 48px;
        height: 38px;
        background: #fff;
        border: 2px solid #99ede6;
      }
`


const DayContainer2 = styled.span`
    width: 51px;
    height: 41px;
    border: hidden;
    z-index: 4,
    position: relative;
    color: rgb(216, 216, 216);
    padding-top: 15px;
    font-weight: 500;
    font-family: Cabin, sans-serif;
`

const DaysTopBar = styled.span`
    font-weight: bold;
    color: rgb(117, 117, 117);
    font-family: Cabin, sans-serif;
`

const TopBarContainer = styled.div`
    width: 350px;
    height: 20px;
    margin-left: 26px;
    margin-top: 10px
    margin-bottom: 10px;
    margin-top: 15px;
`
const TopMost = styled(TopBarContainer)`
    margin-bottom: 20px;
    margin-top: 15px;
`

const MonthAndDate = styled.div`
    font-size: 22px;
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
  :hover {
    text-decoration: underline;
  }
`


export { ClearDates, TaxFeeWarning, TopMost, CalendarContainer, DayContainer, DayContainer2, DaysTopBar, TopBarContainer, MonthAndDate}