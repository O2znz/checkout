import React, { Component } from 'react';
import {NextButton, CalendarBox} from '../styling/reactStyles.js';


class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            month: props.month,
            reservedDates: []
        }

        this.handleMouseOver = this.handleMouseOver.bind(this);
    }
    
    handleMouseOver(event) {
        this.setState((state, props) => ({
            month: props.month,
            reservedDates: props.reservedDates,
          }));
    }
   

    render() {
        return (
            <CalendarBox onMouseMove={this.handleMouseOver}>
                <div>{this.props.month}</div>
                {/* <NextButton> previous </NextButton>
                <span>{props.month} {props.year}</span>
                <NextButton> next </NextButton>
                <div>{props.dates.map((day) => {
                    return <span>{day}</span>
                })}</div> */}
            </CalendarBox>
        )
    }
}

export default Calendar