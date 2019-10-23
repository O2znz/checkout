window.styled.createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Cabin|Rubik&display=swap');
  
  body {
    padding: 0;
    margin: 0;
    font-family: 'Cabin', sans-serif;
  }
`

const DatesBox = window.styled.div`
  border: 1px solid #EBEBEB;
  height: 30px;
  padding: 10px;
  margin-top: 5px
  border-radius: 3px
`
const DatesBox2 = window.styled.div`
  border: 1px solid #EBEBEB;
  height: 335px;
  background: #fff;
  z-index: 3;
  position: relative;
  border-radius: 3px
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
`

const Box = window.styled.div`
  border: 1px solid #EBEBEB;
  width: 410px;
  height: 500px;
  padding: 20px;
  background-color: #fff;
  border-radius: 3px
`
const Box2 = window.styled(Box)`
  height: 700px;
`

const NextButton = window.styled.button`
  border: 1px solid #A8A6A6;
  border-radius: 4px;
  color: #A8A6A6,
  margin: 20px;
`

const NextOrPreviousMonth = window.styled.span` 
  z-index: 3;
  position: relative;
  background-color: #FFF;
  font-weight: 400;
  color: #484848;
  font-size: 22px;
  font-family: Cabin, sans-serif;
`
const TopRow = window.styled.div`
  display: flex;
  justify-content: spread-between;
`

const CalendarBox = window.styled.div`
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


const Line = window.styled.div`
  color: #EBEBEB;
  border-top: 1px solid;
  margin: 10px;
`

const GeneralText = window.styled.div`
  color: #312B2B;
  font-size: 14px;
  margin-top: 30px
`




export {Box2, DatesBox2, TopRow, NextOrPreviousMonth, CalendarBox, NextButton, DatesBox, Line, Box}

