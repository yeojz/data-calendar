var moment = require('moment');

module.exports = function(date){
  var numDaysInWeek = 7;

  // Momentize Date
  var mdate = moment(date, 'YYYY-MM');

  // First Integer Day (Sun/Mon/...) of the Month
  var offset = parseInt(mdate.weekday());

  // Get the last day of the month
  var lastDay = parseInt(mdate.endOf('month').format('D'));

  return Math.ceil( (lastDay + offset) / numDaysInWeek);
};
