import React, { Component } from 'react';
import Calendar from './Calendar.jsx'
import styled from 'styled-components'
import axios from 'axios';



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
      reservedDates: [],
      initialClick: true,
      monthStr: '',
      yearStr: '2019'
    }
    this.showCheckinCalendar = this.showCheckinCalendar.bind(this);
    this.showCheckoutCalendar = this.showCheckoutCalendar.bind(this);
    this.getCurrentCalendar = this.getCurrentCalendar.bind(this);
    this.getNextCalendar = this.getNextCalendar.bind(this);
    this.getPreviousCalendar = this.getPreviousCalendar.bind(this);
  }

  getCurrentCalendar() {
    axios.get(`/currentCalendar?ID=${this.props.id}`)
      .then((response) => {
        console.log(response.data)
        this.setState({reservedDates: response.data.reservedDates})
      })
      .catch((err) => {
        console.log("there was an err getting the current calendar: ", err)
      });

      axios.get('/month')
        .then((response) => {
          var month = Number(response.data.month)
          var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          var monthStr = months[month-1]
          this.setState({
            month: response.data.month,
            currentMonth: response.data.month,
            monthStr: monthStr
          })
        .catch((err) => {
          console.log("there was an error getting the month")
        })
      })

      // axios.get('/monthAndYear')
      //   .then((response) => {
      //     console.log("this is the response data from MonthandYear Get Req", response.data)
      //   })
      //   .catch((err) => {
      //     console.log("your month and year call failed dawg", err)
      //   })
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

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.getCurrentCalendar()
    }
  }


  render() {
    console.log("this is your monthstr", this.state.monthStr)


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
                <Calendar monthStr={this.state.monthStr} year={this.state.yearStr} reservedDates={this.state.reservedDates} currentMonth={this.state.currentMonth} month={99}/>
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
                <Calendar monthStr={this.state.monthStr} year={this.state.yearStr} reservedDates={this.state.reservedDates} currentMonth={this.state.currentMonth} month={132}/>
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