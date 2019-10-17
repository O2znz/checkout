import React, { Component } from 'react';
import {NextOrPreviousMonth, CalendarBox} from '../styling/reactStyles.js';
import FlexContainer from 'react-styled-flexbox';
import {CalendarContainer} from '../styling/CalendarStyles.js';
import Day from './Day.jsx';
import Box from '@material-ui/core/Box'

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datesArr: []
        }
        this.generateDatesArr = this.generateDatesArr.bind(this)
    }

    //this.props.firstDay //this.props.daysInMonth

    generateDatesArr(startDay, daysInMonth) {
        console.log(startDay, daysInMonth, 'these are the arguments being passed thru')
        var results = []
        var n = 0
        var x = 1
    
        while ( n < startDay ) {
            results.push(0)
            n++
        }
        
        while (x <= daysInMonth) {
            results.push(x);
            x++
        }

        while (results.length < 42) {
            results.push(0)
        }

        return results
    }



    render() {
        var previousArrow = '<';
        var nextArrow = '>';
        var datesArr = this.generateDatesArr(this.props.firstDay, this.props.daysInMonth)
        //console.log('this is datesArr', datesArr)
        //var dummyArr = [1, 2, 3, 4, 5, 1, 1, 1, 1, 1, 1,1 ,1, 1, 1,1, 2, 3, 4, 5, 1, 1, 1, 1, 1, 1 ,1 ,1,1,1 ,1,1, 1, 1,1,1,1,1,1,1,1,1]
        console.log(this.state.datesArr, "this is the state of the datesArr")
        console.log(this.props.firstDay, this.props.daysInMonth, 'these are the props!')
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
                        {datesArr.map((day, index) => {
                        return <Day key={index} day={day}/>
                        })}
                        </Box>
                    </CalendarContainer>
                </Box>
            </CalendarBox>
        )
    }
}


export default Calendar