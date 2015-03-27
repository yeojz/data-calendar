/*
 * Calculates the Number of Weeks in a Month
 *
 * @param object    moment.js Date object
 * @return integer  number of weeks in the month
 */

export default function(mDate){
  var numDaysInWeek = 7;

  // First Integer Day (Sun/Mon/...) of the Month
  var offset = parseInt(mDate.startOf('month').weekday());

  // Get the last day of the month
  var lastDay = parseInt(mDate.endOf('month').format('D'));

  return Math.ceil((lastDay + offset) / numDaysInWeek);
};
