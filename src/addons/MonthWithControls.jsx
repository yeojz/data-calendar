var React = require('react'),
    moment = require('moment');

var classNames = require('../helpers/classNames'),
    mergePropTypes = require('../helpers/mergePropTypes'),
    objectFilter = require('../helpers/objectFilter');

var monthProps = require('../propTypes/monthProps'),
    moduleProps = require('../propTypes/monthWithControlsProps');

var Month = require('../core/Month.jsx'),
    DaysOfWeek = require('../core/DaysOfWeek.jsx');

var MonthWithControls = React.createClass({

  statics: {
    __DataCalendarMonthAddons__: true
  },

  _propTypeKeys: Object.keys(moduleProps),

  propTypes: mergePropTypes(monthProps, moduleProps),

  getDefaultProps: function() {
    return {
      controls: true,
      monthTitle: true,

      dayNameFormat: 'short',

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
   * Gets the title to display
   */
  _getMonthTitle: function(){

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
        <div className='data-calendar-title'>
          {contents}
        </div>
      );
    }

    return '';
  },


  /*
   * Checks for a renderer and returns the calendar controls
   */
  _getControls: function(){

    var controls = this.props.controls;

    if (typeof controls === 'function'){
      return controls(this._prevMonth, this._nextMonth, this._currMonth);
    }

    if (typeof controls === 'boolean' && controls){
      return (
        <div className='data-calendar-controls'>
          <div className='data-calendar-controls-prev'
                onClick={this._prevMonth}>
            {this.props.btnPrev}
          </div>
          <div className='data-calendar-controls-today'
                onClick={this._currMonth}>
            {this.props.btnToday}
          </div>
          <div className='data-calendar-controls-next'
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

  render: function() {

    var monthTitle = this._getMonthTitle();
    var controls = this._getControls();

    var classes = classNames({
      'data-calendar-addons': true,
      'data-calendar-addons--month': true
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

module.exports = MonthWithControls;
