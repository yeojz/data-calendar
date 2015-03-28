import React from 'react';
import moment from 'moment';

import {classNames, eventPropTypes, weeksInMonth} from '../helpers';
import {monthProps} from '../propTypes';

import Day from './Day';
import Entry from './Entry';
import Week from './Week';

const Month = React.createClass({

  statics: {
    __DataCalendarMonth__: true
  },

  propTypes: monthProps,


  getDefaultProps() {
    return {
      disable: []
    };
  },

  componentWillMount() {
    this.__setStateFromProps(this.props);
  },


  componentWillReceiveProps(nextProps) {
    this.__setStateFromProps(nextProps);
  },




  /*
   * Private Use Only
   * *************************************************** */

  __setStateFromProps(props){
    var date = this.__getDate(props);
    var month = this.__getMonthRange(date);

    this.setState({
      mDate: date,
      numberOfWeeks: weeksInMonth(date),
      rangeStart: month.start,
      rangeEnd: month.end
    });
  },


  __getDate(props){
    var date = props.year + '' + props.month;
    return moment(date, 'YYYYMM');
  },


  __getMonthRange(date){
    return {
      start: date.format('YYYYMMDD'),
      end: date.endOf('month').format('YYYYMMDD')
    };
  },


  __getEntries(date){

    var entries = [],
        entryList;

    // Check for disable flag
    if (this.props.disable.indexOf('entry') >= 0){
      return entries;
    }

    // Check if its a valid function
    if (typeof this.props.entriesGetter !== 'function'){
      return entries;
    }

    // Get List of entries
    entryList = this.props.entriesGetter(date);

    // If not an Array, Exit.
    if (!(Array.isArray(entryList))){
      return entries;
    }

    // Map each entry to the Entry Object
    entries = entryList.map((entry, i) => {
      return (
        <Entry
          data={entry}
          entryDataGetter={this.props.entryDataGetter}
          entryRenderer={this.props.entryRenderer}
          key={i} />
      );
    });


    return entries;
  },


  __getDay(date){

    let entries = this.__getEntries(date);
    let dayMouseProps = eventPropTypes.getMouseProps(this.props, 'Day');

    return (
      <Day
        {...dayMouseProps}
        date={date}
        key={date}
        rangeStart={this.state.rangeStart}
        rangeEnd={this.state.rangeEnd}
        showDate={true}>

        {entries}
      </Day>
    );

  },


  __getWeek(startDate, idx){

    let week = [];

    // Offset the start
    startDate.add(-1, 'day');

    // Loop through 1 Week
    for (let i = 0; i < 7; i++){
      let date = startDate.add(1, 'day').format('YYYYMMDD');
      week.push(this.__getDay(date));
    }

    return (
      <Week key={idx}>
        {week}
      </Week>
    );
  },




  /*
   * Render Helpers
   * *************************************************** */

  _getWeeks(){
    let weeks = [];

    for (let i = 0; i < this.state.numberOfWeeks; i++){

      // Create New Instances
      let m = this.__getDate(this.props),
          start = i * 7;

      // Get Start of the week
      start = start - parseInt(m.weekday()) + 1;

      weeks.push(this.__getWeek(m.date(start), i));
    }

    return weeks;
  },




  /*
   * Render
   * *************************************************** */

  render() {

    let weeks = this._getWeeks();

    let classes = classNames({
      'dc-month': true
    }, this.props.className);

    return (
      <div className={classes}>
        {weeks}
      </div>
    );
  }
});

export default Month;
