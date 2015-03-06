var React = require('react');

var children = require('../helpers/children'),
    classNames = require('../helpers/classNames');

var Week = React.createClass({



  /*
   * Render Helpers
   * *************************************************** */

  _getDays: function(){

    return children(this.props.children,
                    '__DataCalendarDay__',
                    '<Day />');
  },




  /*
   * Render
   * *************************************************** */

  render: function() {

    var days = this._getDays();

    var classes = classNames({
      'data-calendar-week': true
    }, this.props.className);

    return (
      <div className={classes}>
        {days}
      </div>
    );
  }
});

module.exports = Week;
