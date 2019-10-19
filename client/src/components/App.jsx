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

// const DatesBox2 = styled.div`
//   border: 1px solid blue;
//   height: 100px;
//   padding: 10px;
//   background: pink
//   z-index: 6,
//   position: relative;
// `

// var divStyle = {
//   z-index: '4',
//   backgroundImage: 'url(' + imgUrl + ')',
//   WebkitTransition: 'all', // note the capital 'W' here
//   msTransition: 'all' // 'ms' is the only lowercase vendor prefix
// };


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listingInfo: [],
      id: '',
      showGuests: false,
      hideBottom: false,
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
    var guestCount = '2 guests'
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
                <DatesBox2><Guests guestsMax={this.state.listingInfo.GuestsMax}/></DatesBox2>
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

