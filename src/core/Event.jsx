var React = require('react');

var cx = require('../helpers/cx');

var Events = React.createClass({
  statics: {
    __DataCalendarEvent__: true
  },

  propTypes: {
    data: React.PropTypes.object.isRequired,
    eventDataGetter: React.PropTypes.func.isRequired,
    eventRenderer: React.PropTypes.func
  },

  render: function() {

    var classes = cx({
      'data-calendar-event': true
    });

    return (
      <div className={classes}>
        Events
      </div>
    );
  }
});

module.exports = Events;
