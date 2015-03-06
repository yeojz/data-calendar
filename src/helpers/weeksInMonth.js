
/*
 *  Calculates the Number of Weeks in a Month
 *
 *  @mDate Moment Date Object
 */
module.exports = function(mDate){
  var numDaysInWeek = 7;

  // First Integer Day (Sun/Mon/...) of the Month
  var offset = parseInt(mDate.weekday());

  // Get the last day of the month
  var lastDay = parseInt(mDate.endOf('month').format('D'));

  return Math.ceil( (lastDay + offset) / numDaysInWeek);
};
