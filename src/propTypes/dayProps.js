var React = require('react');

module.exports = {
  // Extra classNames to place in module root element
  className: React.PropTypes.string,

  // The date of the day
  date: React.PropTypes.string,

  // Whether to display the day's date
  // Or just treat this as a container.
  dateShow: React.PropTypes.bool,

  // Formats the display of the day's date
  dateFormat: React.PropTypes.string
};
