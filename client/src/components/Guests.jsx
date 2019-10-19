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
    }

    addAdults() {
        if (this.state.guestTotal <= this.props.guestsMax) {
            this.setState({adults: this.state.adults + 1})
        }
    }


    subtractAdults() {
        if (this.state.guestTotal >= 1) {
            this.setState({adults: this.state.adults - 1})
        }
    }

    
    

    render() {
        var adults = 'Adults'
        var children = 'Children'
        var infants = 'Infants'
        var infantsBlurb = '4 guests maximum. Infants dont count towards the total number of guests.'
        console.log(this.props.guestsMax, 'this is the max guestsfrom props')
        return (
            <div>
                <FlexContainer directionColumn={true}>
                    <AgeBlock>
                        <GuestCount>
                            <FlexContainer justifySpaceBetween={true}>
                                <span>{adults}</span>
                                <FlexContainer>
                                    <PlusButton>
                                        +
                                    </PlusButton>
                                    {this.state.adults}
                                    <PlusButton>
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
                                    <PlusButton>
                                        +
                                    </PlusButton>
                                    {this.state.children}
                                    <PlusButton>
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
                                    <PlusButton>
                                        +
                                    </PlusButton>
                                    {this.state.infants}
                                    <PlusButton>
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

