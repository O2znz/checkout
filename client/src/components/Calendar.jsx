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

        return (
            <CalendarBox>
                <FlexContainer justifySpaceBetween={true}>
                   <NextOrPreviousMonth onClick={this.props.getPreviousCalendar}>{previousArrow}</NextOrPreviousMonth>
                   <div>{this.props.monthStr} {this.props.year}</div>
                   <NextOrPreviousMonth onClick={this.props.getNextCalendar}>{nextArrow}</NextOrPreviousMonth>
                </FlexContainer>
                <div>{this.props.currentMonth}</div>
                <div>{this.props.month}</div>
            
            </CalendarBox>
        )
    }
}


export default Calendar