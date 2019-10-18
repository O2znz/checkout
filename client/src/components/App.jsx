import React, { Component } from 'react';
import axios from 'axios';
import {Box, DatesBox} from '../styling/reactStyles.js';
import Price from './Price.jsx';
import Reviews from './Reviews.jsx';
import CheckinCheckout from './CheckinCheckout.jsx';
import {DatesAndGuests, ChargeWarning, ReserveButton, Line, Attention, Views} from '../styling/AppStyles.js'
import FlexContainer from 'react-styled-flexbox'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listingInfo: [],
      id: ''
    };
    this.initialize = this.initialize.bind(this);
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

  componentDidMount() {
    this.initialize()
  }

  render() {
    var dates = 'Dates';
    var guests = 'Guests';
    var chargeWarning = 'You wont be charged yet'
    var attention = 'This place is getting a lot of attention.'
    var viewsThisWeek = 'It’s been viewed 500+ times in the past week.'
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
              <DatesBox> 1 guest </DatesBox>
              <FlexContainer justifyCenter={true}>
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
            </Box>
      </div>
    );
  }
}


export default App;

