import React from 'react';
import moment from 'moment';

import {children, classNames, eventPropTypes} from '../helpers';
import {dayProps} from '../propTypes';

const Day = React.createClass({

  statics: {
    __DataCalendarDay__: true
  },

  propTypes: dayProps,

  getDefaultProps() {
    return {
      today: moment().format('YYYYMMDD'),
      showDate: false,
      dateFormat: 'D'
    };
  },

  getInitialState() {
    return {
      date: moment(this.props.date, 'YYYYMMDD')
    };
  },




  /*
   * Render Helpers
   * *************************************************** */

  _getEntries() {

    return children(this.props.children,
                    '__DataCalendarEntry__',
                    '<Entry />');
  },


  // Checks if date is out of the current stated range
  _isOutOfMonth() {

    // if range not defined
    if (!this.props.rangeStart || !this.props.rangeEnd){
      return false;
    }

    // Check range
    if (this.props.date < this.props.rangeStart || this.props.date > this.props.rangeEnd){
      return true;
    }

    return false;
  },




  /*
   * Render
   * *************************************************** */

  render() {

    let entries = this._getEntries(),
        header = '';

    if (this.props.showDate) {
      header = (
        <div className='dc-day-header'>
          {this.state.date.format(this.props.dateFormat)}
        </div>
      );
    }

    let today = (this.state.date.format('YYYYMMDD') === this.props.today);

    let mouseProps = eventPropTypes.getMouseProps(this.props);
    mouseProps = eventPropTypes.setParams(mouseProps, this.state, this.props);

    let classes = classNames({
      'dc-day': true,
      'dc-day--today': today,
      'dc-day--outOfMonth': this._isOutOfMonth()
    }, this.props.className);

    return (
      <div
        {...mouseProps}
        className={classes}>
        {header}
        {entries}
      </div>
    );
  }
});

export default Day;
