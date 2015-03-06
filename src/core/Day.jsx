var React = require('react'),
    moment = require('moment');

var classNames = require('../helpers/classNames'),
    children = require('../helpers/children');

var Day = React.createClass({

  statics: {
    __DataCalendarDay__: true
  },

  propTypes: {
    className: React.PropTypes.string,

    date: React.PropTypes.string,
    dateShow: React.PropTypes.bool,
    dateFormat: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      today: moment().format('YYYYMMDD'),
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

  _getEntries: function(){

    return children(this.props.children,
                    '__DataCalendarEntry__',
                    '<Entry />');
  },




  /*
   * Render
   * *************************************************** */

  render: function() {

    var entries = this._getEntries(),
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

    var today = (this.state.date.format('YYYYMMDD') === this.props.today);

    var classes = classNames({
      'data-calendar-day': true,
      'data-calendar-day--today': today,
      'data-calendar-day--outOfMonth': outOfMonth
    }, this.props.className);

    return (
      <div className={classes}>
        {header}
        {entries}
      </div>
    );
  }
});

module.exports = Day;
