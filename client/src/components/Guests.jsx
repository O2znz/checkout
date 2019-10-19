import React, { Component } from 'react';
import FlexContainer from 'react-styled-flexbox';
import {GuestCount, Dropdown} from '../styling/GuestStyles.js';
import {DatesBox} from '../styling/reactStyles.js';


class Guests extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: false
        }
    }
    

    render() {
        var guestCount='1 guest'
        return (
            <div>
                <FlexContainer contentFlexEnd={true}>
                    <GuestCount onClick={()=> this.setState({dropdown: !this.state.dropdown})}>{guestCount}</GuestCount>
                </FlexContainer>
                {this.state.dropdown ? 
                    <DatesBox> hi this is your drop down  </DatesBox>
                    : null
                }
            </div>
        )
    }
}

export default Guests;

