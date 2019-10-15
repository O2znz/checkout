import React, { Component } from 'react';
import {NextButton, CalendarBox} from '../styling/reactStyles.js';


class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            month: props.month,
            test: "test is working"
        }

        this.handleMouseOver = this.handleMouseOver.bind(this);
    }
    
    handleMouseOver(event) {
        this.setState((state, props) => ({
            month: props.month
          }));
    }
   

    render() {
        return (
            <CalendarBox onMouseMove={this.handleMouseOver}>
                <div>{this.state.month}</div>
                <div>{this.state.test}</div>
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