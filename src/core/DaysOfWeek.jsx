var React = require('react');

var classNames = require('../helpers/classNames'),
    dayNameHelper = require('../helpers/dayNames');

var moduleProps = require('../propTypes/daysOfWeekProps');

var DaysOfWeek = React.createClass({

  propTypes: moduleProps,

  getDefaultProps: function() {
    return {
      type: 'short'
    };
  },

  render: function() {

    var names = dayNameHelper(this.props.type);

    names = names.map(function(name, i){
      return (
        <div key={i} className='data-calendar-daysofweek-day'>
          {name}
        </div>
      );
    });

    var classes = classNames({
      'data-calendar-daysofweek': true
    }, this.props.className);

    return (
      <div className={classes}>
        {names}
      </div>
    );
  }
});

module.exports = DaysOfWeek;
