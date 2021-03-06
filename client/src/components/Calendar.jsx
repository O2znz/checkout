import React, { Component } from 'react';
import {NextOrPreviousMonth, CalendarBox} from '../styling/reactStyles.js';
import FlexContainer from 'react-styled-flexbox';
import {ClearDates, CalendarContainer, DaysTopBar, TopBarContainer, MonthAndDate, TopMost, TaxFeeWarning} from '../styling/CalendarStyles.js';
import Day from './Day.jsx';
import Box from '@material-ui/core/Box';
import { cloneNode } from '@babel/types';


class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datesArr: [],
            startDay: '',
            startMonth: '',
            endDay: '',
            firstClick: true,
            nextReservedDay: '',
            reservationObj: '',
            beforeSelection: {}
        }
        this.generateDatesArr = this.generateDatesArr.bind(this);
        this.createResObj = this.createResObj.bind(this);
        this.handleStartClick = this.handleStartClick.bind(this);
        this.handleEndClick = this.handleEndClick.bind(this);
        this.handleGrayOut = this.handleGrayOut.bind(this);
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

        if (this.props.handleDateSelect) {
            
            if (!this.state.startDay) {
               
                var findNextReservedDay = (day, datesArr) => {
                    var counter = 0;
                    var result = 0;
                    var findDay = (day) => {
                        if (datesArr.includes(day)) {
                            result = day; 
                            return;
                        } else if (counter >= 42) {
                            return;
                        } else {
                            counter++;
                            return findDay(day+1)
                        }
                    }
                findDay(day + 1);
                return result;
            }

            var nextReservedDay = findNextReservedDay(day, this.props.reservedDates)

                var resCopy =  {...this.state.reservationObj}
                var count = day

                if (count > 0 && count < 42) {
                    count++
                    resCopy[count] = true;
                }

                this.setState({resObj: resCopy})

               
            var resObjCopy = {...this.state.reservationObj}
            var grayedDates = 1

                while (grayedDates < day) {
                        resObjCopy[grayedDates] = true;
                        grayedDates++;
                }
                
                while (nextReservedDay < 42) {
                    resObjCopy[nextReservedDay] = true;
                    nextReservedDay++
                }
            
            

            this.setState({
                startDay: day,
                startMonth: month,
                firstClick: false,
                nextReservedDay: nextReservedDay,
                reservationObj: resObjCopy
            })

            }

            var resKeys = Object.keys(resObjCopy)
            var resArray = [];

            for (var i = 0; i < resKeys.length; i++) {
                resArray.push(Number(resKeys[i]))
            }
            
            
            this.props.handleDateSelect(resArray, day)
        }
        else if (this.props.handleCheckoutSelect) {
            this.props.handleCheckoutSelect(day)
            var resCopy2 = {...this.state.reservationObj}
            this.handleGrayOut(resCopy2, day)
        }
    }

    handleGrayOut(resObj, day) {
        var resCopy =  {...resObj}
        var count = day

        if (count > 0 && count < 42) {
            count++
            resCopy[count] = true;
        }

        //console.log(resCopy, 'rescopy after while look in handle grayout')
        // BUG: resCopy here is different then what reservationObj is after the state updates
        this.setState({reservationObj: resCopy})
        //this.setState({reservationObj: resCopy}, console.log('set state is happening in handle greyout, and this is the state of reservationObj', this.state.reservationObj))
    }

    handleEndClick(e, day) {
        //needs to update the reservation obj
        //this function isnt
        if (this.state.startDay) {
            this.setState({
                endDay: day
            })
        } 
    }

    componentDidMount() {
        var datesArr = this.generateDatesArr(this.props.firstDay, this.props.daysInMonth)
        var resObj = this.createResObj(this.props.reservedDates);
        this.setState({
            reservationObj: resObj})
    }

    componentDidUpdate(prevProps) {
        if (this.props.reservedDates !== prevProps.reservedDates) {
            var resObj = this.createResObj(this.props.reservedDates);
            this.setState({
                reservationObj: resObj
            })
        }
      }


    render() {
        var previousArrow = '<';
        var nextArrow = '>';
        var datesArr = this.generateDatesArr(this.props.firstDay, this.props.daysInMonth)
        var priceWarning = 'Prices do not include fees and taxes.'
        var clearDates = 'Clear dates'

        console.log(this.state.reservationObj, 'resobj in state')

        return (
            <CalendarBox>
                <TopMost>
                    <FlexContainer justifySpaceBetween={true} itemsCenter={true}>
                        <FlexContainer>
                        <NextOrPreviousMonth onClick={this.props.getPreviousCalendar}>{previousArrow}</NextOrPreviousMonth>
                        </FlexContainer>
                        <MonthAndDate>{this.props.monthStr} {this.props.year}</MonthAndDate>
                        <NextOrPreviousMonth onClick={this.props.getNextCalendar}>{nextArrow}</NextOrPreviousMonth>
                    </FlexContainer>
                </TopMost>
                    <TopBarContainer>
                        <FlexContainer justifySpaceBetween={true}>
                            <DaysTopBar>Su</DaysTopBar>
                            <DaysTopBar>Mo</DaysTopBar>
                            <DaysTopBar>Tu</DaysTopBar>
                            <DaysTopBar>We</DaysTopBar>
                            <DaysTopBar>Th</DaysTopBar>
                            <DaysTopBar>Fr</DaysTopBar>
                            <DaysTopBar>Sa</DaysTopBar>
                        </FlexContainer>
                    </TopBarContainer>
                <Box display="flex" justifyContent="center">
                    <CalendarContainer> 
                        <Box display="flex" justifyContent="center" flexWrap="wrap"> 
                        {datesArr.map((day, index) => {
                            if (this.state.firstClick) {
                                return <Day month={this.props.monthStr} key={index} day={day} isReserved='false' reservedDates={this.state.reservationObj} handleClick={this.handleStartClick}/>
                            } else if (!this.state.firstClick) {
                                return <Day handleClick={this.handleEndClick} month={this.props.monthStr} key={index} day={day} isReserved='false' reservedDates={this.state.reservationObj}/>
                            }
                        })}
                        </Box>
                    </CalendarContainer>
                </Box>
                <FlexContainer directionColumn={true}> 
                        <TaxFeeWarning> 
                            {priceWarning}
                        </TaxFeeWarning>
                        <ClearDates onClick={this.props.clearDates}>
                            {clearDates}
                        </ClearDates>
                </FlexContainer>
            </CalendarBox>
        )
    }
}


export default Calendar