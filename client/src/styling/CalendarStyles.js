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
    height: 58px;
    border: 1px solid gray;
    z-index: 4,
    position: relative;
`



export {CalendarContainer, DayContainer}