import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {Button, Box} from '../styling/reactStyles.js'




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listingInfo: [],
      id: '',
      reservedDates: [],
      month: ''
    };
    this.initialize = this.initialize.bind(this);
    this.getCurrentCalendar = this.getCurrentCalendar.bind(this);
    this.getNextCalendar = this.getNextCalendar.bind(this);
    this.getPreviousCalendar = this.getPreviousCalendar.bind(this);
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

  getCurrentCalendar() {
    axios.get(`/currentCalendar?ID=${this.state.id}`)
      .then((response) => {
        console.log(response.data)
        this.setState({reservedDates: response.data})
      })
      .catch((err) => {
        console.log("there was an err getting the current calendar: ", err)
      });

      axios.get('/month')
        .then((response) => {
          this.setState({month: response.data})
        })
  }

  getNextCalendar() {
    axios.get(`/nextCalendar?ID=${this.state.id}`)
      .then((response) => {
        console.log(response.data)
        this.setState({reservedDates: response.data})
      })
      .catch((err) => {
        console.log("there was an err getting the next calendar: ", err)
      });
  }

  getPreviousCalendar() {
    axios.get(`/previousCalendar?ID=${this.state.id}`)
      .then((response) => {
        console.log(response.data)
        this.setState({reservedDates: response.data})
      })
      .catch((err) => {
        console.log("there was an err getting the previous calendar: ", err)
      });
  }

  componentDidMount() {
    this.initialize()
  }


  render() {
    return (
      <div>
          <div onClick={this.getCurrentCalendar}>
            Current Calendar
           </div>
            <div onClick={this.getNextCalendar}>
            Next Calendar
            </div>
            <div onClick={this.getPreviousCalendar}>
              Previous Calendar
            </div>
            <Button> Click me! </Button>
            <Box> This is my box! </Box>
      </div>
    );
  }
}


export default App;

