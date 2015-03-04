var React = require('react');

var cx = require('../helpers/cx'),
    invariant = require('../helpers/invariant');

var ReactChildren = React.Children;

var Week = React.createClass({




  /*
   * Render Helpers
   * *************************************************** */

  _getDays: function(){

    var children = [];

    ReactChildren.forEach(this.props.children, function(child) {

      if (child == null) {
        return;
      }

      invariant(
        child.type.__DataCalendarDay__,
        'child type should be <Day />'
      );

      children.push(child);
    });

    return children;
  },




  /*
   * Render
   * *************************************************** */

  render: function() {

    var days = this._getDays();

    var classes = cx({
      'data-calendar-week': true
    });

    return (
      <div className={classes}>
        {days}
      </div>
    );
  }
});

module.exports = Week;
