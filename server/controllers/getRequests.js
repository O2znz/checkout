var mongoose = require('mongoose');
var Booking = require('../../database/index.js').Booking
var moment = require('moment');
mongoose.connect('mongodb://localhost/reservations', {useNewUrlParser: true});
var prevMonths = [1,2,3,4,5,6,7,8,9,0,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

var getInitialData = function(id, callback) {
  Booking.findOne({listingId: id}).then((data) => {
    callback(null, data)
  })
  .catch((err) => {
    callback(err)
  })
}

var currentCal = (month, year, dates) => {
  var mmddStr = month.toString() + " " + year.toString();
  var copy = dates.slice();
  //transform timestamp to DD MM YY format
  var makeReadable = copy.map((date) => {
    var day = moment(date)
    return day.format('DD MM YY');
  })
  // filter out only the days from the specified month 
  var findMonths = makeReadable.filter(date => date.includes(mmddStr));

  // create array of days that are currently booked in the month then return that array
  var availableDays = findMonths.map((day) => {
    return Number(day.substring(0,2))
  });

  return availableDays;
}

var getCalendar = function(id, month, year, callback) {
  Booking.findOne({listingId: id}).then((data) => {
    var dates = data.Dates;
    var reservedDates = currentCal(month, year, dates)
    // console.log(reservedDates, reservedDates.length)
    var reserved = {reservedDates}
    callback(null, reserved);
  })
  .catch((err) => {
    callback(err)
  })

}



module.exports = {getInitialData, getCalendar, prevMonths}


