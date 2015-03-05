
/*
 *  Calculates the Number of Weeks in a Month
 *
 *  @mdate Moment Date Object
 */
module.exports = function(mdate){
  var numDaysInWeek = 7;

  // First Integer Day (Sun/Mon/...) of the Month
  var offset = parseInt(mdate.weekday());

  // Get the last day of the month
  var lastDay = parseInt(mdate.endOf('month').format('D'));

  return Math.ceil( (lastDay + offset) / numDaysInWeek);
};
