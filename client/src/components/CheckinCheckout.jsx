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
      yearStr: '2019',
      months: {
        January: 'February',
        February: 'March',
        March: 'April',
        April: 'May',
        May: 'June',
        June: 'July',
        July: 'August',
        August: 'September',
        September: 'October',
        October: 'November',
        November: 'December',
        December: 'January'
      },
      monthBack: {
        January: 'December',
        February: 'January',
        March: 'February',
        April: 'March',
        May: 'April',
        June: 'May',
        July: 'June',
        August: 'July',
        September: 'August',
        October: 'September',
        November: 'October',
        December: 'November'
      },
      daysInMonth: {
        January: 31,
        February: 29,
        March: 31,
        April: 30,
        May: 31,
        June: 30,
        July: 31,
        August: 31,
        September: 30,
        October: 31,
        November: 30,
        December: 31
      },
      nextMonthReservedDates: [],
      previousMonthReservedDates: 'All the days are passed.',
      firstDayOfMonth: "",
      firstDayPreviousMonth: "",
      nextFirstDay: "",
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
            monthStr: monthStr,
            firstDayOfMonth: response.data.dow,
            nextFirstDay: response.data.nextDow 
          })
        .catch((err) => {
          console.log("there was an error getting the month")
        })
      })

      axios.get(`/nextCalendar?ID=${this.props.id}`)
      .then((response) => {
        console.log(response.data)
        this.setState({nextMonthReservedDates: response.data.reservedDates})
      })
      .catch((err) => {
        console.log("there was an err getting the next calendar: ", err)
      });
  }

  getNextCalendar() {
    // set the displayed calendar's reserved dates to the previously rendered next month's dates
    var currentReservedDates = this.state.nextMonthReservedDates
    var previousReserved = this.state.reservedDates
    this.setState({
      reservedDates: currentReservedDates,
      previousMonthReservedDates: previousReserved
    })
    // then fetch the next month's reserved dates and change state accordingly
    axios.get(`/nextCalendar?ID=${this.props.id}`)
      .then((response) => {
        console.log(response.data)
        this.setState({nextMonthReservedDates: response.data.reservedDates})
      })
      .catch((err) => {
        console.log("there was an err getting the next calendar: ", err)
      });
      //change the monthStr state and the year

  
     var currentMonth = this.state.monthStr;
     var firstDayofCurrentMonth = this.state.firstDayOfMonth
     var numberOfDaysInMonth = this.state.daysInMonth[currentMonth]
     var newFirstDay = (firstDayofCurrentMonth + numberOfDaysInMonth) % 7
     

     var nextMonthStr = this.state.months[currentMonth];
     var numberOfDaysNextMonth = this.state.daysInMonth[nextMonthStr];
     var nextMonthNewFirstDay = (newFirstDay + numberOfDaysNextMonth) % 7;



     this.setState({
       firstDayOfMonth: newFirstDay,
       nextFirstDay: nextMonthNewFirstDay,
       firstDayPreviousMonth: firstDayofCurrentMonth
     })
    

      var mStr = this.state.monthStr
      var monStr = this.state.months[mStr]

      if (this.state.monthStr !== 'December') {
        this.setState({monthStr: monStr})
      } else if (this.state.monthStr === 'December' && this.state.yearStr === '2019') {
        this.setState({
          yearStr: '2020',
          monthStr: monStr
          })
      }
  }

  getPreviousCalendar() {
    var currentReservedDates = this.state.previousMonthReservedDates
    this.setState({reservedDates: currentReservedDates})

    axios.get(`/previousCalendar?ID=${this.props.id}`)
      .then((response) => {
        console.log(response.data)
        this.setState({previousMonthReservedDates: response.data.reservedDates})
      })
      .catch((err) => {
        console.log("there was an err getting the previous calendar: ", err)
      });

      var mStr = this.state.monthStr
      var monStr = this.state.monthBack[mStr]

      if (this.state.monthStr !== 'January') {
        this.setState({monthStr: monStr})
      } else if (this.state.monthStr === 'January' && this.state.yearStr === '2020') {
        this.setState({
          yearStr: '2019',
          monthStr: monStr
          })
      }

        // Calculate the day of the week the first day of this month, last month and next month fall upon
      var previousMonth = this.state.monthBack[this.state.monthStr];
      var daysInPreviousMonth = this.state.daysInMonth[previousMonth];
      var firstDayOfPreviousMonth = (daysInPreviousMonth - this.state.firstDayOfMonth)%7;
      var newCurrentMonth = this.state.firstDayPreviousMonth
      var newNextMonth = this.state.firstDayOfMonth

      if (this.state.monthStr === 'January') {
        firstDayOfPreviousMonth = 5;
        newCurrentMonth = 0
        newNextMonth = 3;
      }


      this.setState({
        firstDayPreviousMonth: firstDayOfPreviousMonth,
        firstDayOfMonth: newCurrentMonth,
        nextFirstDay:  newNextMonth
      })
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
                <Calendar daysInMonth={this.state.daysInMonth[this.state.monthStr]} firstDay={this.state.firstDayOfMonth} getPreviousCalendar={this.getPreviousCalendar} getNextCalendar={this.getNextCalendar} monthStr={this.state.monthStr} year={this.state.yearStr} reservedDates={this.state.reservedDates} currentMonth={this.state.currentMonth}/>
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
                <Calendar daysInMonth={this.state.daysInMonth[this.state.monthStr]} firstDay={this.state.firstDayOfMonth} getPreviousCalendar={this.getPreviousCalendar} getNextCalendar={this.getNextCalendar} monthStr={this.state.monthStr} year={this.state.yearStr} reservedDates={this.state.reservedDates} currentMonth={this.state.currentMonth} month={132}/>
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