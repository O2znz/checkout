import styled from 'styled-components'

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
    width: 375px;
    height: 20px;

`




export {CalendarContainer, DayContainer, DayContainer2, DaysTopBar}