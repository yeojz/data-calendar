var React = require('react');

var cx = require('../helpers/cx');

var Entry = React.createClass({
  statics: {
    __DataCalendarEntry__: true
  },

  propTypes: {
    data: React.PropTypes.object.isRequired,
    entryDataGetter: React.PropTypes.func.isRequired,
    entryRenderer: React.PropTypes.func
  },




  /*
   * Private Use Only
   * *************************************************** */

  __entryDataGetterDefault: function(){
    return (<div className='data-calendar-entry-placeholder' />);
  },




  /*
   * Render Helper
   * *************************************************** */

   // Note:
   // 3 possible return Functions
  _getEntryDetails: function(){
    if (typeof this.props.entryRenderer === 'function'){
      return this.props.entryRenderer(this.props.data);
    }

    if (typeof this.props.entryDataGetter === 'function'){
      return this.props.entryDataGetter(this.props.data);
    }

    return this.__entryDataGetterDefault();
  },




  /*
   * Render
   * *************************************************** */

  render: function() {

    var classes = cx({
      'data-calendar-entry': true
    });

    var entry = this._getEntryDetails();

    return (
      <div className={classes}>
        {entry}
      </div>
    );
  }
});

module.exports = Entry;
