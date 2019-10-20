import React, { Component } from 'react';
import axios from 'axios';
import {Box, DatesBox, DatesBox2} from '../styling/reactStyles.js';
import Price from './Price.jsx';
import Reviews from './Reviews.jsx';
import CheckinCheckout from './CheckinCheckout.jsx';
import {DatesAndGuests, ChargeWarning, ReserveButton, Line, Attention, Views} from '../styling/AppStyles.js'
import {GuestCount} from '../styling/GuestStyles.js'
import FlexContainer from 'react-styled-flexbox';
import Guests from './Guests.jsx'
import { isThisExpression } from '@babel/types';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listingInfo: [],
      id: '',
      showGuests: false,
      hideBottom: false,
      guestCount: 1,
      infantCount: 0
    };
    this.initialize = this.initialize.bind(this);
    this.changeGuestCount = this.changeGuestCount.bind(this);
  }

  initialize() {
    axios.get('/listing')
      .then((response) => {
        console.log(response.data)
        this.setState({
          listingInfo: response.data,
          id: response.data.listingId
        })
      });
  }

  changeGuestCount(guests, infants) {
    this.setState({
      infantCount: infants,
      guestCount: guests
    })
  }

  componentDidMount() {
    this.initialize()
  }

  render() {
    var dates = 'Dates';
    var guests = 'Guests';
    var chargeWarning = 'You wont be charged yet'
    var attention = 'This place is getting a lot of attention.'
    var viewsThisWeek = 'It’s been viewed 500+ times in the past week.'
    var guestCount;

    if (this.state.guestCount === 1 && this.state.infantCount === 0) {
      guestCount = `${this.state.guestCount} guest`
    } else if (this.state.guestCount > 1 && this.state.infantCount === 0) {
      guestCount = `${this.state.guestCount} guests`
    } else if (this.state.infantCount === 1 && this.state.guestCount === 1) {
      guestCount = `${this.state.guestCount} guest, ${this.state.infantCount} infant`
    } else if (this.state.infantCount === 1 && this.state.guestCount > 1) {
      guestCount = `${this.state.guestCount} guests, ${this.state.infantCount} infant`
    } else if (this.state.infantCount > 1 && this.state.guestCount > 1) {
      guestCount = `${this.state.guestCount} guests, ${this.state.infantCount} infants`
    } else if (this.state.infantCount > 1 && this.state.guestCount === 1) {
      guestCount = `${this.state.guestCount} guest, ${this.state.infantCount} infants`
    }
    
    return (
      <div>
            <Box> 
              <Price price={this.state.listingInfo.Price}/> 
              <Reviews rating={this.state.listingInfo.Rating} reviewsCount={this.state.listingInfo.ReviewCount}/>
              <Line/>
              <DatesAndGuests>{dates}</DatesAndGuests> 
               <DatesBox>
                  <CheckinCheckout id={this.state.id}/>
              </DatesBox>
              <DatesAndGuests>{guests}</DatesAndGuests> 
              <DatesBox onClick={()=>this.setState({showGuests: !this.state.showGuests, hideBottom: !this.state.hideBottom})}> 
                  <FlexContainer contentFlexEnd={true}>
                      <GuestCount> {guestCount}</GuestCount>
                  </FlexContainer> </DatesBox>
              {this.state.showGuests ? 
                <DatesBox2><Guests changeGuestCount={this.changeGuestCount} guestsMax={this.state.listingInfo.GuestsMax}/></DatesBox2>
                : null
              }
              {!this.state.hideBottom ? 
                (<span><FlexContainer justifyCenter={true}>
                <ReserveButton>Reserve</ReserveButton>
                </FlexContainer>
                <FlexContainer justifyCenter={true}>
                  <ChargeWarning>{chargeWarning}</ChargeWarning>
                </FlexContainer>
                <Line/>
                <FlexContainer justifyLeft={true} directionColumn={true}>
                  <Attention>{attention}</Attention>
                  <Views>{viewsThisWeek}</Views>
                </FlexContainer>
                </span>)
                : null
              }
            </Box>
      </div>
    );
  }
}


export default App;

