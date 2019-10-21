import React, { Component } from 'react';
import {NextOrPreviousMonth, CalendarBox} from '../styling/reactStyles.js';
import FlexContainer from 'react-styled-flexbox';
import {ClearDates, CalendarContainer, DaysTopBar, TopBarContainer, MonthAndDate, TopMost, TaxFeeWarning} from '../styling/CalendarStyles.js';
import Day from './Day.jsx';
import Box from '@material-ui/core/Box';


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

            //make a copy of the reservation obj in state, then add greyed out dates
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
            
            console.log('this is hitting')

            this.setState({
                startDay: day,
                startMonth: month,
                firstClick: false,
                nextReservedDay: nextReservedDay,
                reservationObj: resObjCopy
            }, console.log('set state worked'))

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
        }
    }

    handleEndClick(e, day) {
        if (this.state.startDay) {
            this.setState({endDay: day})
        } 
    }

    // componentDidMount() {
    //     var datesArr = this.generateDatesArr(this.props.firstDay, this.props.daysInMonth)
    //     var resObj = this.createResObj(this.props.reservedDates);
    //     this.setState({reservationObj: resObj})
    // }

    componentDidUpdate(prevProps) {
        if (this.props.reservedDates !== prevProps.reservedDates) {
            var resObj = this.createResObj(this.props.reservedDates);
           // console.log('this is the reservationobj from inside components did update', resObj)
            this.setState({reservationObj: resObj})
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
                        <ClearDates>
                            {clearDates}
                        </ClearDates>
                </FlexContainer>
            </CalendarBox>
        )
    }
}


export default Calendar