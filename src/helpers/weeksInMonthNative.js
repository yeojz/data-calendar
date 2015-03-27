/*
 * Calculates the Number of Weeks in a Month (no external library)
 *
 * @param integer   year (eg: 2015)
 * @param integer   month (1 -  12)
 * @return integer  number of weeks in the month
 */
export default function(year, month){

  var numDaysInWeek = 7;

  if (typeof year !== 'number' ||
      typeof month !== 'number'){
    throw new Error('[weeksInMonthNative] Arguments supplied must be a number');
  }

  // First Integer Day (Sun/Mon/...) of the Month
  var offset = new Date(year, month-1, 1).getDay();

  // Get the last day of the month
  var lastDay = new Date(year, month, 0).getDate();

  return Math.ceil((lastDay + offset) / numDaysInWeek);
};
