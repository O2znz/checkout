import React, { Component } from 'react';
import FlexContainer from 'react-styled-flexbox';
import {SubSubOptions, SubOptions2, Numbers, AgeBlock, CloseButton, InfantsBlurb, PlusButton, MenuOptions, SubOptions} from '../styling/GuestStyles.js';



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

            this.props.changeGuestCount(this.state.guestTotal+1, this.state.infants)
        }
    }


    subtractAdults() {
        if (this.state.guestTotal > 1 && this.state.adults > 1) {
            this.setState({
                adults: this.state.adults - 1,
                guestTotal: this.state.guestTotal - 1,
            })
            this.props.changeGuestCount(this.state.guestTotal-1, this.state.infants)
        }
    }

    addChildren() {
        if (this.state.guestTotal < this.props.guestsMax) {
            this.setState({
                children: this.state.children + 1,
                guestTotal: this.state.guestTotal + 1
            })
            this.props.changeGuestCount(this.state.guestTotal+1, this.state.infants)
        }
    }

    subtractChildren() {
        if (this.state.guestTotal > 1 && this.state.children > 0) {
            this.setState({
                children: this.state.children - 1,
                guestTotal: this.state.guestTotal - 1,
            })
            this.props.changeGuestCount(this.state.guestTotal-1, this.state.infants)
        }
    }
    
    addInfants() {
        if (this.state.infants  < 5) {
            this.setState({
                infants: this.state.infants + 1
            })
            this.props.changeGuestCount(this.state.guestTotal, this.state.infants + 1)
        }
    }

    subtractInfants() {
        console.log('hitting here')
        if (this.state.infants  > 0) {
            this.setState({
                infants: this.state.infants - 1
            })
            this.props.changeGuestCount(this.state.guestTotal, this.state.infants - 1)
        }
    }

    render() {
        var adults = 'Adults'
        var children = 'Children'
        var infants = 'Infants'
        var infantsBlurb = `${this.props.guestsMax} guests maximum. Infants dont count towards the total number of guests.`
        var underTwo = 'Under 2'
        var ages = 'Ages 2-12'
      
        return (
            <div>
                <FlexContainer directionColumn={true}>
                    <AgeBlock>
                        <MenuOptions>
                            <FlexContainer justifySpaceBetween={true} itemsFlexStart={true}>
                                <FlexContainer directionColumn={true}>
                                    <SubOptions2>{adults}</SubOptions2>
                                 </FlexContainer>
                                <FlexContainer itemsBaseline={true}>
                                    <PlusButton onClick={this.addAdults}>
                                        +
                                    </PlusButton>
                                        <Numbers>
                                            {this.state.adults}
                                        </Numbers>
                                    <PlusButton onClick={this.subtractAdults}>
                                        -
                                    </PlusButton>
                                </FlexContainer>
                            </FlexContainer>
                        </MenuOptions>
                    </AgeBlock>
                    <br/>
                    <AgeBlock>
                        <MenuOptions>
                            <FlexContainer justifySpaceBetween={true}>
                                <FlexContainer directionColumn={true}>
                                    <SubOptions>{children}</SubOptions>
                                    <SubSubOptions>{ages}</SubSubOptions>
                                 </FlexContainer>
                                <FlexContainer itemsBaseline={true}>
                                    <PlusButton onClick={this.addChildren}>
                                        +
                                    </PlusButton>
                                        <Numbers>
                                            {this.state.children}
                                        </Numbers>
                                    <PlusButton onClick={this.subtractChildren}>
                                        -
                                    </PlusButton>
                                </FlexContainer>
                            </FlexContainer>
                        </MenuOptions>
                    </AgeBlock>
                    <br/>
                    <AgeBlock>
                    <MenuOptions>
                            <FlexContainer justifySpaceBetween={true}>
                                <FlexContainer directionColumn={true}>
                                <SubOptions>{infants}</SubOptions>
                                <SubSubOptions>{underTwo}</SubSubOptions>
                                </FlexContainer>
                                <FlexContainer itemsBaseline={true}>
                                    <PlusButton onClick={this.addInfants}>
                                        +
                                    </PlusButton>
                                        <Numbers>
                                            {this.state.infants}
                                        </Numbers>
                                    <PlusButton onClick={this.subtractInfants}>
                                        -
                                    </PlusButton>
                                </FlexContainer>
                            </FlexContainer>
                        </MenuOptions>
                    </AgeBlock>
                    <InfantsBlurb>{infantsBlurb}</InfantsBlurb>
                    <FlexContainer justifyFlexEnd={true}>
                        <CloseButton>
                            Close
                        </CloseButton>
                    </FlexContainer>
                </FlexContainer>
            </div>
        )
    }
}

export default Guests;

