/*
 * dayNames
 *
 * @param string    predefined set of name types in moment.js
 * @returns array   the list of day names of a week
 */

var moment = require('moment');

module.exports = function(type){
  type = type || 'long';

  switch (type){
    case 'short':
      return moment.weekdaysShort();
    case 'min':
      return moment.weekdaysMin();
    case 'long':
      return moment.weekdays();
  }

};
