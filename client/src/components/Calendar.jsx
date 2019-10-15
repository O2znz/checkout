import React, { Component } from 'react';
import {NextButton, CalendarBox} from '../styling/reactStyles.js';


/*
This will have two buttons, some text, and then the selected calendar

*/


class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <CalendarBox>
                <NextButton> previous </NextButton>
                <NextButton> next </NextButton>
                <div>so much text jasdhjdashjdashjka</div>
            </CalendarBox>
        )
    }
}

export default Calendar