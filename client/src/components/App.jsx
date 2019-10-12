import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listingInfo: [],
      id: 66,
      reservedDates: [],
      month: ''
    };
    this.initialize = this.initialize.bind(this);
    this.getCurrentCalendar = this.getCurrentCalendar.bind(this)
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
    console.log(this.state.id)
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
          console.log("this is the current month:" , response.data)
          this.setState({month: response.data})
        })
  }

  componentDidMount() {
    this.initialize()
  }


  render() {
    return (
      <div onClick={this.getCurrentCalendar}>
        Hello World
        {this.state.reservedDates[3]}
      </div>
    );
  }
}


export default App;


// /something/:id
// --> /something/8989

// req.params

// /something
// --> /something?id=789

// req.query xxxx