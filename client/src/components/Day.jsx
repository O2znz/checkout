import React, { Component } from 'react';
import FlexContainer from 'react-styled-flexbox';
import {DayContainer, IsFree, IsReserved, DayContainer2} from '../styling/CalendarStyles.js';



// const NextOrPreviousMonth = styled.span`

// `

class Day extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wasClicked: false,
        }
    }
    

    render() {
        const reservedStatus = this.props.isReserved;
        console.log(reservedStatus)
        console.log(typeof this.props.day, 'this is the type of day')
        let box;

        if (reservedStatus === false) {
            console.log("reserved status is evaulating to false")
        }

        if (this.props.day === 0) {
            box = <DayContainer/>
        } else if (reservedStatus === 'true') {
            box = <DayContainer><FlexContainer justifyCenter={true} itemsCenter={true}>{this.props.day}</FlexContainer></DayContainer>;
        } else if (reservedStatus === 'false') {
            box =  <DayContainer2><FlexContainer justifyCenter={true} itemsCenter={true}> {this.props.day} </FlexContainer></DayContainer2>;
        } 
    
        return ( box );          
    }
}

export default Day;


// render() {
//     //console.log(this.props.isReserved)
//     return (
//     <DayContainer><FlexContainer justifyCenter={true} itemsCenter={true}>{this.props.day}</FlexContainer></DayContainer>
//     )
// }
// }