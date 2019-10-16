import React, { Component } from 'react';
import {NextOrPreviousMonth, CalendarBox} from '../styling/reactStyles.js';
import FlexContainer from 'react-styled-flexbox';
import {CalendarContainer} from '../styling/CalendarStyles.js';
import Day from './Day.jsx';
import Box from '@material-ui/core/Box'

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        var previousArrow = '<';
        var nextArrow = '>';
        var dummyArr = [1, 2, 3, 4, 5, 1, 1, 1, 1, 1, 1,1 ,1, 1, 1,1, 2, 3, 4, 5, 1, 1, 1, 1, 1, 1 ,1 ,1,1,1 ,1,1, 1, 1,1]

        return (
            <CalendarBox>
                <FlexContainer justifySpaceBetween={true}>
                   <NextOrPreviousMonth onClick={this.props.getPreviousCalendar}>{previousArrow}</NextOrPreviousMonth>
                   <div>{this.props.monthStr} {this.props.year}</div>
                   <NextOrPreviousMonth onClick={this.props.getNextCalendar}>{nextArrow}</NextOrPreviousMonth>
                </FlexContainer>
                <div>{this.props.currentMonth}</div>
                <div>{this.props.month}</div>
                <Box display="flex" justifyContent="center">
                    <CalendarContainer> 
                        <Box display="flex" justifyContent="center" flexWrap="wrap"> 
                        {dummyArr.map((day)=> {
                        return <Day/>
                        })}
                        </Box>
                    </CalendarContainer>
                </Box>
            </CalendarBox>
        )
    }
}


export default Calendar