import React from 'react';
import moment from 'moment';

import {classNames} from '../helpers';
import {moduleProps} from '../propTypes';

const DaysOfWeek = React.createClass({

  propTypes: moduleProps,

  getDefaultProps() {
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
  _getNames(type){
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

  render() {

    var names = this._getNames(this.props.type);

    names = names.map(function(name, i){
      return (
        <div key={i} className='dc-daysofweek-day'>
          {name}
        </div>
      );
    });

    var classes = classNames({
      'dc-daysofweek': true
    }, this.props.className);

    return (
      <div className={classes}>
        {names}
      </div>
    );
  }
});

export default DaysOfWeek;
