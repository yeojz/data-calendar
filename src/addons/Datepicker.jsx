import React from 'react';
import moment from 'moment';

import {classNames, mergePropTypes, objectFilter} from '../helpers';
import MonthWithControls from './MonthWithControls';


const Datepicker = React.createClass({

  statics: {
    __DataCalendarAddons__: true,
    __DataCalendarDatepicker__: true
  },

  propTypes: {

    // Whether Popover is active at start
    active: React.PropTypes.bool,

    // Custom classes
    className: React.PropTypes.string,

    // Starting date value
    date: React.PropTypes.instanceOf(Date),

    // A valid date format according to momentjs
    dateFormat: React.PropTypes.string,

    // Placeholder text for use when:
    // - Invalid Date
    // - No date
    placeholder: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      active: false,
      dateFormat: 'YYYY/MM/DD',
      placeholder: ''
    };
  },

  getInitialState() {
    return {
      date: null,
      dateString: ''
    };
  },




  /*
   * Lifecycle
   * *************************************************** */

  componentWillMount() {
    this._convertPropsToState(this.props);
  },

  componentWillReceiveProps(nextProps) {
    this._convertPropsToState(nextProps);
  },




  /*
   * Helpers
   * *************************************************** */

  _convertPropsToState(props){

    // If Date is specified.
    if (!props.date) {
      return;
    }

    var mDate = moment(props.date);

    this.setState({
      date: props.date,
      mDate: mDate,
      dateString: mDate.format(this.props.dateFormat)
    });
  },




  /*
   * Event Handlers and Helpers
   * *************************************************** */

  _handleToggleClick(evt) {

    evt.stopPropagation();
    evt.preventDefault();

  },




  /*
   * Render
   * *************************************************** */

  render() {

    let dateString = this.state.dateString;

    // Generate the toggle
    let toggleText;

    if (dateString.toLowerCase === 'invalid date'){
      toggleText = this.props.placeholder;
    } else {
      toggleText = dateString;
    }


    // Determine the picker
    let picker;

    if (this.props.active){
      picker = (
        <MonthWithControls />
      );
    }


    // Final Render
    let classes = classNames({
      'dc-addons': true,
      'dc-addons--datepicker': true
    }, this.props.className);

    return (
      <div className={classes}>
        <div
          className='dc-datepicker-toggle'
          onClick={this._handleToggleClick}>
          {toggleText}
        </div>

        <div className='dc-datepicker-frame'>
          {picker}
        </div>
      </div>
    );
  }
});

export default Datepicker;
