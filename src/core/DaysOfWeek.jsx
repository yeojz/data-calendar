var React = require('react'),
    moment = require('moment');

var classNames = require('../helpers/classNames');

var moduleProps = require('../propTypes/daysOfWeekProps');

var DaysOfWeek = React.createClass({

  propTypes: moduleProps,

  getDefaultProps: function() {
    return {
      type: 'short'
    };
  },




  /*
   * Render Helper
   * *************************************************** */

  /*
   * @param string    predefined set of name types in moment.js
   * @returns array   the list of day names of a week
   */
  _getNames: function(type){
    type = type || 'long';

    switch (type){
      case 'short':
        return moment.weekdaysShort();
      case 'min':
        return moment.weekdaysMin();
      case 'long':
        return moment.weekdays();
    }
  },




  /*
   * Render
   * *************************************************** */

  render: function() {

    var names = this._getNames(this.props.type);

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
