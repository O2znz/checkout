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
    color: blue;
`

const DayContainer2 = styled.span`
    width: 51px;
    height: 48px;
    border: 1px solid gray;
    z-index: 4,
    position: relative;
    color: gray;
`

const IsReserved = styled.span`
    color: blue;
    z-index: 5;
    position: relative;
`

const IsFree = styled.span`
    color: gray;
    z-index: 5;
    position: relative;
`



export {CalendarContainer, DayContainer, IsReserved, IsFree, DayContainer2}