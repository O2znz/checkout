import React, { Component } from 'react';
import FlexContainer from 'react-styled-flexbox';
import {DayContainer} from '../styling/CalendarStyles.js';



// const NextOrPreviousMonth = styled.span`

// `

class Day extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    

    render() {
        return (
            <DayContainer> 1 </DayContainer>
        )
    }
}

export default Day;