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
            startMonth: ''
        }
        this.generateDatesArr = this.generateDatesArr.bind(this);
        this.createResObj = this.createResObj.bind(this);
        this.handleClick = this.handleClick.bind(this);
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

    handleClick(e, day, month) { 
        this.setState({
            startDay: day,
            startMonth: month
        })
    }


    render() {
        var previousArrow = '<';
        var nextArrow = '>';
        var datesArr = this.generateDatesArr(this.props.firstDay, this.props.daysInMonth)
        var resObj = this.createResObj(this.props.reservedDates);

        //console.log(this.props.monthStr, this.)

        if (this.state.startDay && this.state.startMonth) {
            var grayedDates = 1;
            
            while (grayedDates < this.state.startDay && this.state.startMonth === this.props.monthStr) {
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
                                return <Day month={this.props.monthStr} key={index} day={day} isReserved='false' reservedDates={resObj} handleClick={this.handleClick}/>
                        })}
                        </Box>
                    </CalendarContainer>
                </Box>
            </CalendarBox>
        )
    }
}


export default Calendar