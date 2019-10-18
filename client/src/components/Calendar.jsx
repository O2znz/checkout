import React, { Component } from 'react';
import {NextOrPreviousMonth, CalendarBox} from '../styling/reactStyles.js';
import FlexContainer from 'react-styled-flexbox';
import {CalendarContainer, DaysTopBar} from '../styling/CalendarStyles.js';
import Day from './Day.jsx';
import Box from '@material-ui/core/Box'

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datesArr: [],
            startDay: '',
            startMonth: '',
            endDay: '',
            firstClick: true
        }
        this.generateDatesArr = this.generateDatesArr.bind(this);
        this.createResObj = this.createResObj.bind(this);
        this.handleStartClick = this.handleStartClick.bind(this);
        this.handleEndClick = this.handleEndClick.bind(this);
    }

    generateDatesArr(startDay, daysInMonth) {
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

    createResObj (datesArray) {
        var resObj = {}
        datesArray.forEach((day) => {
            resObj[day] = true;
        })
        return resObj
    }

    handleStartClick(e, day, month) { 
        if (!this.state.startDay) {
            this.setState({
                startDay: day,
                startMonth: month,
                firstClick: false
            })
        }
    }

    handleEndClick(e, day) {
        if (this.state.startDay) {
            this.setState({endDay: day})
        } 
    }


    render() {
        var previousArrow = '<';
        var nextArrow = '>';
        var datesArr = this.generateDatesArr(this.props.firstDay, this.props.daysInMonth)
        var resObj = this.createResObj(this.props.reservedDates);

        if (this.state.startDay && this.state.startMonth === this.props.monthStr) {
            var grayedDates = 1;
            
            while (grayedDates < this.state.startDay && this.state.startMonth) {
                    resObj[grayedDates] = true
                    grayedDates++;
            }
        } 
        
        if (this.state.startDay && this.state.endDay) {
            var grayedDates = this.state.endDay + 1

            while (grayedDates <= 42) {
                resObj[grayedDates] = true
                grayedDates++;
            }

        }
    

        return (
            <CalendarBox>
                <FlexContainer justifySpaceBetween={true}>
                   <NextOrPreviousMonth onClick={this.props.getPreviousCalendar}>{previousArrow}</NextOrPreviousMonth>
                   <div>{this.props.monthStr} {this.props.year}</div>
                   <NextOrPreviousMonth onClick={this.props.getNextCalendar}>{nextArrow}</NextOrPreviousMonth>
                </FlexContainer>
                    <FlexContainer justifySpaceBetween={true}>
                        <DaysTopBar>Su</DaysTopBar>
                        <DaysTopBar>Mo</DaysTopBar>
                        <DaysTopBar>Tu</DaysTopBar>
                        <DaysTopBar>We</DaysTopBar>
                        <DaysTopBar>Th</DaysTopBar>
                        <DaysTopBar>Fr</DaysTopBar>
                        <DaysTopBar>Sa</DaysTopBar>
                    </FlexContainer>
                <div>{this.props.currentMonth}</div>
                <div>{this.props.month}</div>
                <Box display="flex" justifyContent="center">
                    <CalendarContainer> 
                        <Box display="flex" justifyContent="center" flexWrap="wrap"> 
                        {datesArr.map((day, index) => {
                            if (this.state.firstClick) {
                                return <Day month={this.props.monthStr} key={index} day={day} isReserved='false' reservedDates={resObj} handleClick={this.handleStartClick}/>
                            } else if (!this.state.firstClick) {
                                return <Day handleClick={this.handleEndClick} month={this.props.monthStr} key={index} day={day} isReserved='false' reservedDates={resObj}/>
                            }
                        })}
                        </Box>
                    </CalendarContainer>
                </Box>
            </CalendarBox>
        )
    }
}


export default Calendar