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




  /*
   * Private Use Only
   * *************************************************** */

  __eventDataGetterDefault: function(){
    return (<div className='data-calendar-event-placeholder' />);
  },




  /*
   * Render Helper
   * *************************************************** */

   // Note:
   // 3 possible return Functions
  _getEventDetails: function(){
    if (typeof this.props.eventRenderer === 'function'){
      return this.props.eventRenderer(this.props.data);
    }
    
    if (typeof this.props.eventDataGetter === 'function'){
      return this.props.eventDataGetter(this.props.data);
    }

    return this.__eventDataGetterDefault();
  },




  /*
   * Render
   * *************************************************** */

  render: function() {

    var classes = cx({
      'data-calendar-event': true
    });

    var event = this._getEventDetails();
    
    return (
      <div className={classes}>
        {event}
      </div>
    );
  }
});

module.exports = Events;
