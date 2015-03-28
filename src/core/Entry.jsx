import React from 'react';

import {classNames} from '../helpers';
import {entryProps} from '../propTypes';

const Entry = React.createClass({

  statics: {
    __DataCalendarEntry__: true
  },

  propTypes: entryProps,




  /*
   * Private Use Only
   * *************************************************** */

  __entryDataGetterDefault() {
    return (<div className='dc-entry-placeholder' />);
  },




  /*
   * Render Helper
   * *************************************************** */

   // Note:
   // 3 possible return Functions
  _getEntryDetails() {
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

  render() {

    var classes = classNames({
      'dc-entry': true
    }, this.props.className);

    var entry = this._getEntryDetails();

    return (
      <div className={classes}>
        {entry}
      </div>
    );
  }
});

export default Entry;
