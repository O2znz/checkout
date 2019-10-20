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

const DatesBox = styled.div`
  border: 1px solid #EBEBEB;
  height: 30px;
  padding: 10px;
  margin-top: 5px
  border-radius: 3px
`
const DatesBox2 = styled.div`
  border: 1px solid #EBEBEB;
  height: 335px;
  background: #fff;
  z-index: 3;
  position: relative;
  border-radius: 3px
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
`

const Box = styled.div`
  border: 1px solid #EBEBEB;
  width: 400px;
  height: 500px;
  padding: 10px;
  background-color: #fff;
  border-radius: 3px
`

const NextButton = styled.button`
  border: 1px solid #A8A6A6;
  border-radius: 4px;
  color: #A8A6A6,
  margin: 20px;
`

const NextOrPreviousMonth = styled.span` 
  z-index: 3;
  position: relative;
  background-color: #FFF;
  font-weight: 400;
  color: #484848;
  font-size: 22px;
  font-family: Cabin, sans-serif;
`
const TopRow = styled.div`
  display: flex;
  justify-content: spread-between;
`

const CalendarBox = styled.div`
  border: 1px solid #EBEBEB;
  width: 400px;
  height: 500px;
  padding: 10px;
  z-index: 2;
  position: relative;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px
`


const Line = styled.div`
  color: #EBEBEB;
  border-top: 1px solid;
  margin: 10px;
`

const GeneralText = styled.div`
  color: #312B2B;
  font-size: 14px;
  margin-top: 30px
`




export {DatesBox2, TopRow, NextOrPreviousMonth, CalendarBox, NextButton, DatesBox, Line, Box}

