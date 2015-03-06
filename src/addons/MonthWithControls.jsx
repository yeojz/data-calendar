var React = require('react'),
    moment = require('moment');

var classNames = require('../helpers/classNames');

var Month = require('../core/Month.jsx'),
    DayNames = require('../core/DayNames.jsx');

var MonthWithControls = React.createClass({

  statics: {
    __DataCalendarMonthAddons__: true
  },

  propTypes: {
    className: React.PropTypes.string,

    entryDataGetter: React.PropTypes.func,
    entryRenderer: React.PropTypes.func,
    entriesGetter: React.PropTypes.func.isRequired,

    year: React.PropTypes.number.isRequired,
    month: React.PropTypes.number.isRequired,

    showControls: React.PropTypes.bool,
    showMonthTitle: React.PropTypes.bool,

    dayNameFormat: React.PropTypes.string,
    monthTitleFormat: React.PropTypes.string,

    btnPrev: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.element
    ]),

    btnNext: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.element
    ])
  },

  getDefaultProps: function() {
    return {
      showControls: true,
      showMonthTitle: true,
      dayNameFormat: 'short',
      monthTitleFormat: 'MMMM YYYY',
      btnNext: (<button>Next</button>),
      btnPrev: (<button>Prev</button>),
      btnToday: (<button>Today</button>)
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

  _currMonth: function(){
    var today = moment();

    this.setState({
      year: parseInt(today.format('YYYY')),
      month: parseInt(today.format('MM'))
    });
  },


  /*
   * Render
   * *************************************************** */

  render: function() {

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
          <div className='data-calendar-controls-prev' onClick={this._prevMonth}>{this.props.btnPrev}</div>
          <div className='data-calendar-controls-today' onClick={this._currMonth}>{this.props.btnToday}</div>
          <div className='data-calendar-controls-next' onClick={this._nextMonth}>{this.props.btnNext}</div>
        </div>
      );
    }

    var classes = classNames({
      'data-calendar-addons': true,
      'data-calendar-addons--month': true
    }, this.props.className);

    return (
      <div className={classes}>

        {monthTitle}
        {controls}

        <DayNames type={this.props.dayNameFormat} />

        <Month
          entryDataGetter={this.props.entryDataGetter}
          entryRenderer={this.props.entryRenderer}
          entriesGetter={this.props.entriesGetter}

          year={this.state.year}
          month={this.state.month}
        />
      </div>
    );
  }
});

module.exports = MonthWithControls;
