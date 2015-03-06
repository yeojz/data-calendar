var React = require('react');

var classNames = require('../helpers/classNames');

var moduleProps = require('../propTypes/entryProps');

var Entry = React.createClass({

  statics: {
    __DataCalendarEntry__: true
  },

  propTypes: moduleProps,




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

    var classes = classNames({
      'data-calendar-entry': true
    }, this.props.className);

    var entry = this._getEntryDetails();

    return (
      <div className={classes}>
        {entry}
      </div>
    );
  }
});

module.exports = Entry;
