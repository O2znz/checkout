import React, { Component } from 'react';
import Calendar from './Calendar.jsx'
import styled from 'styled-components'

const Text = styled.span`
    padding: 10px;
    margin: 40px 0px 40px 10px;
    font-size: 20px;
`


class CheckinCheckout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCheckinCalendar: false,
      showCheckoutCalendar: false,
      month: '',
      currentMonth: '',
      reservedDates: []
    }
    this.showCheckinCalendar = this.showCheckinCalendar.bind(this);
    this.showCheckoutCalendar = this.showCheckoutCalendar.bind(this);
    this.getCurrentCalendar = this.getCurrentCalendar.bind(this);
    this.getNextCalendar = this.getNextCalendar.bind(this);
    this.getPreviousCalendar = this.getPreviousCalendar.bind(this);
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
          this.setState({
            month: response.data,
            currentMonth: response.data
          })
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

  showCheckoutCalendar(event) {
    event.preventDefault();
    if (!this.state.showCheckoutCalendar) {
        this.setState({
            showCheckoutCalendar: true,
            showCheckinCalendar: false,
        });
    } else if (this.state.showCheckoutCalendar) {
        this.setState({
            showCheckoutCalendar: false,
            showCheckinCalendar: false,
        });
    }
  }

  showCheckinCalendar(event) {
    event.preventDefault();

    if (!this.state.reservedDates) {
      this.getCurrentCalendar()
    }

    if (!this.state.showCheckinCalendar) {
        this.setState({
            showCheckinCalendar: true,
            showCheckoutCalendar: false
        });
    } else if (this.state.showCheckinCalendar) {
        this.setState({
            showCheckinCalendar: false,
            showCheckoutCalendar: false,
        });
    }
  }


  render() {
    return (
        <div>
          <span>
            <Text onClick={this.showCheckinCalendar}>Checkin</Text>
            <Text> --> </Text>
            <Text onClick={this.showCheckoutCalendar}>Checkout</Text>
          </span>
          {
          this.state.showCheckoutCalendar
            ? (
              <div>
                <Calendar month={10}/>
              </div>
            )
            : (
              null
            )
        }
        {
          this.state.showCheckinCalendar 
            ? (
              <div>
                <Calendar/>
              </div>
            )
            : (
              null
            )
        }
        </div>
    );
  }
}

export default CheckinCheckout;