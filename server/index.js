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
var daysPastThisMonth;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyparser.json());

app.get('/listing', (req, res) => {
    var listingId = faker.random.number({min: 3, max:5})
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
      res.status(500).send(err)
    } else {
      data.reservedDates = data.reservedDates.concat(daysAlreadyPast)
      res.status(200).send(data)
    }
  })
});

app.get('/month', (req, res) =>{
  var today = new Date();
  var todayMoment = moment(today);
  var month = todayMoment.format('MM');
  res.send({month})
})



app.get('/nextCalendar', (req, res) => {
  var id = Number(req.query.ID)
  if (monthTracker === 12) {
    monthTracker = 1;
    yearTracker++
      //TODO make a condition for if a date is requested past the latest reservation date 
  } else {
    monthTracker++;
  }
  getFns.getCalendar(id, monthTracker, yearTracker, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  });
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
  if (monthTracker === currentMonth) {
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


app.listen(PORT, () => console.log('Listening on port: ' + PORT));