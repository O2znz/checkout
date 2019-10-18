import React, { Component } from 'react';
import axios from 'axios';
import {ReserveButton, Box, Line, GeneralText, DatesBox} from '../styling/reactStyles.js';
import Price from './Price.jsx';
import Reviews from './Reviews.jsx';
import CheckinCheckout from './CheckinCheckout.jsx';
import {DatesAndGuests} from '../styling/AppStyles.js'



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
    var guests = 'Guests'
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
              <ReserveButton>Reserve</ReserveButton>
            </Box>
      </div>
    );
  }
}


export default App;

