import React, { Component } from 'react';

class Checkin extends Component {
  constructor() {
    super();
    this.state = {
      showCalendar: false,
    }
    this.showCalendar = this.showCalendar.bind(this);
  }

  showCalendar(event) {
    event.preventDefault();

    if (!this.state.showCalendar) {
        this.setState({
            showCalendar: true
        });
    } else if (this.state.showCalendar) {
        this.setState({
            showCalendar: false
        });
    }
  }

  render() {
    return (
      <span>
        <span onClick={this.showCalendar}>
          Checkin
        </span>
        
        {
          this.state.showCalendar
            ? (
              <div className="checkin">
                <div> Calendar Will Go Here </div>
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

export default Checkin;