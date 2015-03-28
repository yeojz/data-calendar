var React = require('react');

var Month = require('../dep').Addons.MonthWithControls;

var data = require('./data.js');

var MiniCal = React.createClass({

  _data: data,

  render: function() {

    return (
      <div className='dc dc--mini'>
        <Month
          onDayClick={(a, b, c, d)=>{console.log(a, b, c, d); }}
          year={2015}
          month={3}
        />
      </div>
    );
  }
});

module.exports = MiniCal;
