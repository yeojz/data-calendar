var React = require('react'),
    moment = require('moment');

var cx = require('../helpers/cx'),
    weeksInMonth = require('../helpers/weeksInMonth');

var Day = require('./Day.jsx'),
    Event = require('./Event.jsx'),
    Week = require('./Week.jsx');

var Month = React.createClass({
  statics: {
    __DataCalendarMonth__: true
  },

  propTypes: {
    entryDataGetter: React.PropTypes.func,
    entryRenderer: React.PropTypes.func,
    entriesGetter: React.PropTypes.func.isRequired,

    year: React.PropTypes.number.isRequired,
    month: React.PropTypes.number.isRequired
  },


  getInitialState: function() {
    var range = this.__getMonthRange();

    return {
      monthStart: range.start,
      monthEnd: range.end
    };
  },




  /*
   * Private Use Only
   * *************************************************** */

  __getDate: function(){
    var date = this.props.year + '' + this.props.month;
    return moment(date, 'YYYYMM');
  },

  __getMonthRange: function(){
    var date = this.__getDate();

    return {
      start: date.format('YYYYMMDD'),
      end: date.endOf('month').format('YYYYMMDD')
    };
  },

  __getEntries: function(date){
    var entries = [],
        entryList = this.props.entryGetter(date);


    if (typeof entryList !== 'undefined'){
      entries = entryList.map(function(entry, i){
        return (
          <Event
              data={entry}
              entryDataGetter={this.props.entryDataGetter}
              entryRenderer={this.props.entryRenderer}
              key={i} />
        );
      }.bind(this));
    }

    return entries;
  },

  __getDay: function(date){

    var entries = this.__getEntries(date);

    return (
      <Day
        key={date}
        date={date}
        rangeStart={this.state.monthStart}
        rangeEnd={this.state.monthEnd}
        dateShow={true}>

        {entries}
      </Day>
    );

  },

  __getWeek: function(startDate, idx){

    var week = [];

    // Offset the start
    startDate.add(-1, 'day');

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
    var date = this.__getDate();
    var weeks = [];
    var numberOfWeeks = weeksInMonth(date);

    for (var i = 0; i < numberOfWeeks; i++){

      // Create New Instances
      var m = this.__getDate(),
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

    var classes = cx({
      'data-calendar': true,
      'data-calendar--month': true
    });

    return (
      <div className={classes}>
        {weeks}
      </div>
    );
  }
});

module.exports = Month;
