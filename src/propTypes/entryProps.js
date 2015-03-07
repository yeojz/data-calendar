var React = require('react');

module.exports = {

  // Extra classNames to place in module root element
  className: React.PropTypes.string,

  // The data of a single entry / event
  data: React.PropTypes.object.isRequired,

  // Function which returns a single entry / event
  entryDataGetter: React.PropTypes.func,

  // Function for rendering a single entry / event element
  entryRenderer: React.PropTypes.func
};
