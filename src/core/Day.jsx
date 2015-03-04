var React = require('react'),
    moment = require('moment');

var cx = require('../helpers/cx'),
    invariant = require('../helpers/invariant');

var ReactChildren = React.Children;

var Day = React.createClass({
  statics: {
    __DataCalendarDay__: true
  },

  propTypes: {
    date: React.PropTypes.string,
    dateShow: React.PropTypes.bool,
    dateFormat: React.PropTypes.string,

    rangeStart: React.PropTypes.string,
    rangeEnd: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      dateShow: false,
      dateFormat: 'D'
    };
  },

  getInitialState: function() {
    return {
      date: moment(this.props.date, 'YYYYMMDD')
    };
  },




  /*
   * Render Helpers
   * *************************************************** */

  _getEvents: function(){

    var children = [];

    ReactChildren.forEach(this.props.children, function(child) {

      if (child == null) {
        return;
      }

      invariant(
        child.type.__DataCalendarEvent__,
        'child type should be <Event />'
      );

      children.push(child);
    });

    return children;
  },




  /*
   * Render
   * *************************************************** */

  render: function() {

    var events = this._getEvents(),
        header = '';

    if (this.props.dateShow) {
      header = (
        <div className='date-calendar-day-header'>
          {this.state.date.format(this.props.dateFormat)}
        </div>
      );
    }

    var outOfMonth = false;

    if (this.props.rangeStart && this.props.rangeEnd){
      if (this.props.date < this.props.rangeStart || this.props.date > this.props.rangeEnd){
        outOfMonth = true;
      }
    }

    var classes = cx({
      'data-calendar-day': true,
      'data-calendar-day--outOfMonth': outOfMonth
    });

    return (
      <div className={classes}>
        {header}
        {events}
      </div>
    );
  }
});

module.exports = Day;
