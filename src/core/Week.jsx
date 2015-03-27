import React from 'react';

import {children, classNames} from '../helpers';

const Week = React.createClass({

  propTypes: {
    className: React.PropTypes.string
  },


  /*
   * Render Helpers
   * *************************************************** */

  _getDays(){

    return children(this.props.children,
                    '__DataCalendarDay__',
                    '<Day />');
  },




  /*
   * Render
   * *************************************************** */

  render() {

    var days = this._getDays();

    var classes = classNames({
      'dc-week': true
    }, this.props.className);

    return (
      <div className={classes}>
        {days}
      </div>
    );
  }
});

export default Week;
