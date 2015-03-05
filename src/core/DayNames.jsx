var React = require('react');

var cx = require('../helpers/cx'),
    dayNameHelper = require('../helpers/dayNames');

var DayNames = React.createClass({

  propTypes: {
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

    var classes = cx({
      'data-calendar-daynames': true
    });

    return (
      <div className={classes}>
        {names}
      </div>
    );
  }
});

module.exports = DayNames;
