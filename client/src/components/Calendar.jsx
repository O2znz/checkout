import React, { Component } from 'react';
import {NextOrPreviousMonth, CalendarBox} from '../styling/reactStyles.js';
import FlexContainer from 'react-styled-flexbox';

// const NextOrPreviousMonth = styled.span`

// `

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    

    render() {
        var previousArrow = '<';
        var nextArrow = '>';
        console.log("this is monthstr on the calendar side", this.props.monthStr)
        return (
            <CalendarBox>
                <FlexContainer justifySpaceBetween={true}>
                   <NextOrPreviousMonth>{previousArrow}</NextOrPreviousMonth>
                   <div>{this.props.monthStr} {this.props.year}</div>
                   <NextOrPreviousMonth>{nextArrow}</NextOrPreviousMonth>
                </FlexContainer>
                <div>{this.props.currentMonth}</div>
                {this.props.reservedDates.map((day) => {
                    return <span>{day}</span>
                })}
                <div>{this.props.month}</div>
            
            </CalendarBox>
        )
    }
}

/* <NextButton> previous </NextButton>
<span>{props.month} {props.year}</span>
<NextButton> next </NextButton>
<div>{props.dates.map((day) => {
    return <span>{day}</span>
})}</div> */

export default Calendar