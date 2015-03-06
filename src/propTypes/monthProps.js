var React = require('react');

module.exports = {
  className: React.PropTypes.string,

  entryDataGetter: React.PropTypes.func,
  entryRenderer: React.PropTypes.func,
  entriesGetter: React.PropTypes.func.isRequired,

  year: React.PropTypes.number.isRequired,
  month: React.PropTypes.number.isRequired
};
