const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;
const getFns = require('./controllers/getRequests.js');
const faker = require('faker');
const bodyparser = require('body-parser');
const moment = require('moment');
var monthTracker;
var yearTracker;
var currentMonth;
var currentDay;
var currentDate;
var currentYear = 19;
var daysPastThisMonth;

// var date = moment("October 1 2019");
// var daysinMont = date.daysInMonth()
// var dow = date.day();
// console.log(daysinMont);

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyparser.json());

app.get('/listing', (req, res) => {
    var listingId = faker.random.number({min: 0, max:99})
    getFns.getInitialData(listingId, (err, data) => {
        if (err) {
          res.status(404).send(err)
        } else {
          res.status(200).send(data)
        }
    })
})

app.get('/currentCalendar', (req, res) => {
  var id = req.query.ID
  var today = new Date();
  var todayMoment = moment(today);
  var year = todayMoment.format('YY');
  var month = todayMoment.format('MM');
  monthTracker = month;
  yearTracker = year;
  currentMonth = Number(month);
  currentYear = year;
  currentDay = todayMoment.format('DD');
  currentDate = todayMoment.format('MM DD YY');
  var daysAlreadyPast = [];
  var n = 1;
  //create an array of days the client cant book,
  // because the client cant book a day that has already passed
  while (n <= currentDay) {
    daysAlreadyPast.push(n);
    n++;
  }

  daysPastThisMonth = daysAlreadyPast;
  getFns.getCalendar(id, month, year, (err, data) => {
    if (err) {
      console.log("getCalendar fn in index.js failed")
      res.status(500).send(err)
    } else {
      console.log("getCalendar fn in index.js worked")
      data.reservedDates = data.reservedDates.concat(daysAlreadyPast)
      res.status(200).send(data)
    }
  })
});



app.get('/monthAndYear', (req, res) => {
  var month = req.query.ID
  console.log("this is month on the server side", month)
  var year = '20' + strYear 
  console.log(currentMonth, "this is the current month!!")
  var months = ['x', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var month = months[currentMonth];
  res.send({year, month})
})

app.get('/month', (req, res) =>{
  var today = new Date();
  var todayMoment = moment(today);
  var month = todayMoment.format('MM');
  res.send({month})
})



app.get('/nextCalendar', (req, res) => {
  var id = Number(req.query.ID)
  console.log("this is the id in the next calendar server", id)
  if (monthTracker === 12) {
    monthTracker = 1;
    yearTracker++
      //TODO make a condition for if a date is requested past the latest reservation date 
  } else {
    monthTracker++;
  }

  if (monthTracker === currentMonth && currentYear === yearTracker) {
    getFns.getCalendar(id, monthTracker, yearTracker, (err, data) => {
      if (err) {
        res.status(500).send(err)
      } else {
        data.reservedDates = data.reservedDates.concat(daysPastThisMonth)
        res.status(200).send(data)
      }
    });
  } else {
    getFns.getCalendar(id, monthTracker, yearTracker, (err, data) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.status(200).send(data)
      }
    });
  }
})

app.get('/previousCalendar', (req, res) => {
  var id = Number(req.query.ID)
  if (monthTracker === 1) {
    monthTracker = 12
    yearTracker--
      //TODO make a condition for if a date is requested past the latest reservation date 
  } else {
    monthTracker--;
  }
  console.log(monthTracker, currentMonth)
  if (monthTracker === currentMonth && currentYear === yearTracker) {
    getFns.getCalendar(id, monthTracker, yearTracker, (err, data) => {
      if (err) {
        res.status(500).send(err)
      } else {
        data.reservedDates = data.reservedDates.concat(daysPastThisMonth)
        res.status(200).send(data)
      }
    });
  } else if (monthTracker < currentMonth && yearTracker === currentYear || yearTracker < currentYear) {
    res.send("these days arent available because they already passed")
  } else {
    getFns.getCalendar(id, monthTracker, yearTracker, (err, data) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.status(200).send(data)
      }
    });
  }
})


app.listen(PORT, () => console.log('Listening on port: ' + PORT));