import React, { Component } from 'react';
import Calendar from './Calendar.jsx'

class CheckinCheckout extends Component {
  constructor() {
    super();
    this.state = {
      showCheckinCalendar: false,
      showCheckoutCalendar: false
    }
    this.showCheckinCalendar = this.showCheckinCalendar.bind(this);
    this.showCheckoutCalendar = this.showCheckoutCalendar.bind(this);
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
            showCheckoutCalendar: false,
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
      <span>
        <span onClick={this.showCheckinCalendar}> 
            Checkin  -->
        </span>
        <span onClick={this.showCheckoutCalendar}>
          Checkout
        </span>
        {
          this.state.showCheckoutCalendar
            ? (
              <div>
                <div> Checkout Calendar Will Go Here </div>
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
                <div> Checkin Calendar Will Go Here </div>
              </div>
            )
            : (
              null
            )
        }
      </span>
    );
  }
}

export default CheckinCheckout;