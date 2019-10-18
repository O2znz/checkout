import React, { Component } from 'react';
import FlexContainer from 'react-styled-flexbox';
import {DayContainer, DayContainer2} from '../styling/CalendarStyles.js';
import styled from 'styled-components';


class Day extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wasClicked: false
        }
    }
    

    render() {
        const reservations = this.props.reservedDates;
        const day = this.props.day
        const month = this.props.month
        var box;
       
        
        if (this.props.day === 0) {
            box = <DayContainer/>
        } else if (reservations[day]) {
            box = <DayContainer2><FlexContainer justifyCenter={true} itemsCenter={true}>{this.props.day}</FlexContainer></DayContainer2>;
        } else if (!reservations[day]) {
            box =  <DayContainer onClick={(e)=> this.props.handleClick(e, day, month)}><FlexContainer justifyCenter={true} itemsCenter={true}> {this.props.day} </FlexContainer></DayContainer>;
        } 
    
        return (box);          
    }
}

export default Day;

