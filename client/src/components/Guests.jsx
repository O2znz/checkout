import React, { Component } from 'react';
import FlexContainer from 'react-styled-flexbox';
import {GuestCount, AgeBlock, CloseButton, InfantsBlurb, PlusButton} from '../styling/GuestStyles.js';



class Guests extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: false,
            adults: 1,
            children: 0,
            infants: 0,
            guestTotal: 1
        }
        this.addAdults = this.addAdults.bind(this);
        this.subtractAdults = this.subtractAdults.bind(this);
        this.addChildren = this.addChildren.bind(this);
        this.subtractChildren = this.subtractChildren.bind(this);
        this.addInfants = this.addInfants.bind(this);
        this.subtractInfants = this.subtractInfants.bind(this);
    }

    addAdults() {
        if (this.state.guestTotal < this.props.guestsMax) {
            this.setState({
                adults: this.state.adults + 1,
                guestTotal: this.state.guestTotal + 1
            })
        }
    }


    subtractAdults() {
        if (this.state.guestTotal > 1 && this.state.adults > 1) {
            this.setState({
                adults: this.state.adults - 1,
                guestTotal: this.state.guestTotal - 1,
            })
        }
    }

    addChildren() {
        if (this.state.guestTotal < this.props.guestsMax) {
            this.setState({
                children: this.state.children + 1,
                guestTotal: this.state.guestTotal + 1
            })
        }
    }

    subtractChildren() {
        if (this.state.guestTotal > 1 && this.state.children > 0) {
            this.setState({
                children: this.state.children - 1,
                guestTotal: this.state.guestTotal - 1,
            })
        }
    }
    
    addInfants() {
        if (this.state.infants  < 5) {
            this.setState({
                infants: this.state.infants + 1
            })
        }
    }

    subtractInfants() {
        console.log('hitting here')
        if (this.state.infants  > 0) {
            this.setState({
                infants: this.state.infants - 1
            })
        }
    }

    render() {
        var adults = 'Adults'
        var children = 'Children'
        var infants = 'Infants'
        var infantsBlurb = '4 guests maximum. Infants dont count towards the total number of guests.'
     
        return (
            <div>
                <FlexContainer directionColumn={true}>
                    <AgeBlock>
                        <GuestCount>
                            <FlexContainer justifySpaceBetween={true}>
                                <span>{adults}</span>
                                <FlexContainer>
                                    <PlusButton onClick={this.addAdults}>
                                        +
                                    </PlusButton>
                                    {this.state.adults}
                                    <PlusButton onClick={this.subtractAdults}>
                                        -
                                    </PlusButton>
                                </FlexContainer>
                            </FlexContainer>
                        </GuestCount>
                    </AgeBlock>
                    <AgeBlock>
                        <GuestCount>
                            <FlexContainer justifySpaceBetween={true}>
                                <span>{children}</span>
                                <FlexContainer>
                                    <PlusButton onClick={this.addChildren}>
                                        +
                                    </PlusButton>
                                    {this.state.children}
                                    <PlusButton onClick={this.subtractChildren}>
                                        -
                                    </PlusButton>
                                </FlexContainer>
                            </FlexContainer>
                        </GuestCount>
                    </AgeBlock>
                    <AgeBlock>
                    <GuestCount>
                            <FlexContainer justifySpaceBetween={true}>
                                <span>{infants}</span>
                                <FlexContainer>
                                    <PlusButton onClick={this.addInfants}>
                                        +
                                    </PlusButton>
                                    {this.state.infants}
                                    <PlusButton onClick={this.subtractInfants}>
                                        -
                                    </PlusButton>
                                </FlexContainer>
                            </FlexContainer>
                        </GuestCount>
                    </AgeBlock>
                    <InfantsBlurb>{infantsBlurb}</InfantsBlurb>
                    <CloseButton>
                        Close
                    </CloseButton>
                </FlexContainer>
            </div>
        )
    }
}

export default Guests;

