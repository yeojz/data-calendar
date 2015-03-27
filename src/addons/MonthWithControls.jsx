import React from 'react';
import moment from 'moment';

import {classNames, mergePropTypes, objectFilter} from '../helpers';
import {monthProps, monthWithControlsProps} from '../propTypes';
import {DaysOfWeek, Month} from '../core';



const MonthWithControls = React.createClass({

  statics: {
    __DataCalendarMonthAddons__: true
  },

  _propTypeKeys: Object.keys(monthWithControlsProps),

  propTypes: mergePropTypes(monthProps, monthWithControlsProps),

  getDefaultProps() {
    return {
      controls: true,
      monthTitle: true,

      dayNameFormat: 'short',

      btnNext: (<button>Next</button>),
      btnPrev: (<button>Prev</button>),
      btnToday: (<button>Today</button>)
    };
  },

  getInitialState() {
    return {
      year: this.props.year,
      month: this.props.month
    };
  },




  /*
   * Private Use Only
   * *************************************************** */
  __getDate(){
    var date = this.state.year + '-' + this.state.month;
    return moment(date, 'YYYYMM');
  },

  __monthShift(value){
    var date = this.__getDate();

    date.add(value, 'month');

    this.setState({
      year: parseInt(date.format('YYYY')),
      month: parseInt(date.format('MM'))
    });
  },




  /*
   * Render Helpers
   * *************************************************** */

  _prevMonth(){
    this.__monthShift(-1);
  },

  _nextMonth(){
    this.__monthShift(+1);
  },

  _currMonth(){
    var today = moment();

    this.setState({
      year: parseInt(today.format('YYYY')),
      month: parseInt(today.format('MM'))
    });
  },


  /*
   * Gets the title to display
   */
  _getMonthTitle(){

    var contents = '';

    switch (typeof this.props.monthTitle){
      case 'boolean':
        contents = (this.props.monthTitle) ? this.__getDate().format('MMMM YYYY') : '';
        break;
      case 'string':
        contents = this.__getDate().format(this.props.monthTitle);
        break;
      case 'function':
        contents = this.props.monthTitle(this.__getDate());
        break;
      // no default
    }

    if (contents !== ''){
      return (
        <div className='dc-addons-title'>
          {contents}
        </div>
      );
    }

    return '';
  },


  /*
   * Checks for a renderer and returns the calendar controls
   */
  _getControls(){

    var controls = this.props.controls;

    if (typeof controls === 'function'){
      return controls(this._prevMonth, this._nextMonth, this._currMonth);
    }

    if (typeof controls === 'boolean' && controls){
      return (
        <div className='dc-addons-controls'>
          <div className='dc-addons-controls-prev'
                onClick={this._prevMonth}>
            {this.props.btnPrev}
          </div>
          <div className='dc-addons-controls-today'
                onClick={this._currMonth}>
            {this.props.btnToday}
          </div>
          <div className='dc-addons-controls-next'
                onClick={this._nextMonth}>
            {this.props.btnNext}
          </div>
        </div>
      );
    }
  },




  /*
   * Render
   * *************************************************** */

  render() {

    var monthTitle = this._getMonthTitle();
    var controls = this._getControls();

    var classes = classNames({
      'dc-addons': true,
      'dc-month--addons': true
    }, this.props.className);

    // Removes all extra props for this module
    // Remainder will be for <Month />
    var props = objectFilter(this.props, this._propTypeKeys);

    return (
      <div className={classes}>

        {monthTitle}
        {controls}

        <DaysOfWeek type={this.props.dayNameFormat} />

        <Month
          {...props}
          year={this.state.year}
          month={this.state.month}
        />
      </div>
    );
  }
});

export default MonthWithControls;
