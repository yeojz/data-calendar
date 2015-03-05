var React = require('react'),
    moment = require('moment');

var cx = require('../helpers/cx');

var Month = require('../core/Month.jsx');

var MonthWithControls = React.createClass({
  statics: {
    __DataCalendarMonthAddons__: true
  },

  propTypes: {
    entryDataGetter: React.PropTypes.func,
    entryRenderer: React.PropTypes.func,
    entriesGetter: React.PropTypes.func.isRequired,

    year: React.PropTypes.number.isRequired,
    month: React.PropTypes.number.isRequired,

    showControls: React.PropTypes.bool,
    showMonthTitle: React.PropTypes.bool,

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
      monthTitleFormat: 'MMMM YYYY',
      btnNext: (<button>Next</button>),
      btnPrev: (<button>Prev</button>)
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
          <div className='data-calendar-controls-next' onClick={this._prevMonth}>{this.props.btnPrev}</div>
          <div className='data-calendar-controls-prev' onClick={this._nextMonth}>{this.props.btnNext}</div>
        </div>
      );
    }

    return (
      <div className={classes}>
        {monthTitle}
        {controls}

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
