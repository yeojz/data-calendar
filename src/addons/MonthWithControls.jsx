var React = require('react'),
    moment = require('moment');

var cx = require('../helpers/cx');

var Month = require('../core/Month.jsx');

var MonthWithControls = React.createClass({
  statics: {
    __DataCalendarMonthAddons__: true
  },

  propTypes: {
    eventDataGetter: React.PropTypes.func,
    eventRenderer: React.PropTypes.func,
    eventsGetter: React.PropTypes.func.isRequired,

    year: React.PropTypes.number.isRequired,
    month: React.PropTypes.number.isRequired,

    showControls: React.PropTypes.bool,
    showMonthTitle: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      showControls: true,
      showMonthTitle: true,
      monthTitleFormat: 'MMMM YYYY'
    };
  },

  getInitialState: function() {
    return {
      year: this.props.year,
      month: this.props.month
    };
  },




  /*
   * Private Use Only
   * *************************************************** */
  __getDate: function(){
    var date = this.state.year + '-' + this.state.month;
    return moment(date, 'YYYYMM');
  },

  __monthShift: function(value){
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

  _prevMonth: function(){
    this.__monthShift(-1);
  },

  _nextMonth: function(){
    this.__monthShift(+1);
  },




  /*
   * Render
   * *************************************************** */

  render: function() {

    var classes = cx({
      'data-calendar-addons': true,
      'data-calendar-addons--month': true
    });

    var monthTitle = '';
    var controls = '';

    if (this.props.showMonthTitle){
      monthTitle = (
        <div className='data-calendar-title'>
          {this.__getDate().format(this.props.monthTitleFormat)}
        </div>
      );
    }

    if (this.props.showControls){
      controls = (
        <div className='data-calendar-controls'>
          <button onClick={this._prevMonth}>Prev</button>
          <button onClick={this._nextMonth}>Next</button>
        </div>
      );
    }

    return (
      <div className={classes}>
        {monthTitle}
        {controls}

        <Month
          eventDataGetter={this.props.eventDataGetter}
          eventRenderer={this.props.eventRenderer}
          eventsGetter={this.props.eventsGetter}

          year={this.state.year}
          month={this.state.month}
        />
      </div>
    );
  }
});

module.exports = MonthWithControls;
