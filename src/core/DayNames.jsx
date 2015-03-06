var React = require('react');

var classNames = require('../helpers/classNames'),
    dayNameHelper = require('../helpers/dayNames');

var DayNames = React.createClass({

  propTypes: {
    className: React.PropTypes.string,

    type: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      type: 'short'
    };
  },

  render: function() {

    var names = dayNameHelper(this.props.type);

    names = names.map(function(name, i){
      return (
        <div key={i} className='data-calendar-daynames-day'>
          {name}
        </div>
      );
    });

    var classes = classNames({
      'data-calendar-daynames': true
    }, this.props.className);

    return (
      <div className={classes}>
        {names}
      </div>
    );
  }
});

module.exports = DayNames;
