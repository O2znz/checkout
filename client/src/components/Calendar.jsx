import React, { Component } from 'react';
import {NextButton} from '../styling/reactStyles.js'

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
            <div>
                <NextButton> previous </NextButton>
                <NextButton> next </NextButton>
            </div>
        )
    }
}

export default Calendar