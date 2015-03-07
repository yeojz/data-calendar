var React = require('react');

module.exports = {

  // Extra classNames to place in module root element
  className: React.PropTypes.string,

  // Disable portions from rendering
  // Valid: ['entry']
  disable: React.PropTypes.array,

  // Function which returns a single entry / event
  entryDataGetter: React.PropTypes.func,

  // Function for rendering a single entry / event element
  entryRenderer: React.PropTypes.func,

  // Function to get a list of
  // entries / events within a day
  entriesGetter: React.PropTypes.func,

  // Year to show
  year: React.PropTypes.number.isRequired,

  // Month to show
  month: React.PropTypes.number.isRequired
};
