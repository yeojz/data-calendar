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
