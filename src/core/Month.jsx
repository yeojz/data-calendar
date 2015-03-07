var React = require('react'),
    moment = require('moment');

var classNames = require('../helpers/classNames'),
    weeksInMonth = require('../helpers/weeksInMonth');

var moduleProps = require('../propTypes/monthProps');

var Day = require('./Day.jsx'),
    Entry = require('./Entry.jsx'),
    Week = require('./Week.jsx');

var Month = React.createClass({

  statics: {
    __DataCalendarMonth__: true
  },

  propTypes: moduleProps,


  getDefaultProps: function() {
    return {
      disable: []
    };
  },

  componentWillMount: function() {
    this.__setStateFromProps(this.props);
  },


  componentWillReceiveProps: function(nextProps) {
    this.__setStateFromProps(nextProps);
  },




  /*
   * Private Use Only
   * *************************************************** */

  __setStateFromProps: function(props){
    var date = this.__getDate(props);
    var month = this.__getMonthRange(date);

    this.setState({
      mDate: date,
      numberOfWeeks: weeksInMonth(date),
      rangeStart: month.start,
      rangeEnd: month.end
    });
  },


  __getDate: function(props){
    var date = props.year + '' + props.month;
    return moment(date, 'YYYYMM');
  },


  __getMonthRange: function(date){
    return {
      start: date.format('YYYYMMDD'),
      end: date.endOf('month').format('YYYYMMDD')
    };
  },


  __getEntries: function(date){

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
    entries = entryList.map(function(entry, i){
      return (
        <Entry
            data={entry}
            entryDataGetter={this.props.entryDataGetter}
            entryRenderer={this.props.entryRenderer}
            key={i} />
      );
    }.bind(this));


    return entries;
  },


  __getDay: function(date){

    var entries = this.__getEntries(date);

    return (
      <Day
        date={date}
        key={date}
        rangeStart={this.state.rangeStart}
        rangeEnd={this.state.rangeEnd}
        showDate={true}>

        {entries}
      </Day>
    );

  },


  __getWeek: function(startDate, idx){

    var week = [];

    // Offset the start
    startDate.add(-1, 'day');

    // Loop through 1 Week
    for (var i = 0; i < 7; i++){
      var date = startDate.add(1, 'day').format('YYYYMMDD');
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

  _getWeeks: function(){
    var weeks = [];

    for (var i = 0; i < this.state.numberOfWeeks; i++){

      // Create New Instances
      var m = this.__getDate(this.props),
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

  render: function() {

    var weeks = this._getWeeks();

    var classes = classNames({
      'data-calendar': true,
      'data-calendar--month': true
    }, this.props.className);

    return (
      <div className={classes}>
        {weeks}
      </div>
    );
  }
});

module.exports = Month;
