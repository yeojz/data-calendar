var React = require('react');

module.exports = {
  className: React.PropTypes.string,

  data: React.PropTypes.object.isRequired,
  entryDataGetter: React.PropTypes.func.isRequired,
  entryRenderer: React.PropTypes.func
};
