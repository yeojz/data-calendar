var React = require('react');

var Month = require('../../src/addons').Month;

var data = require('./data.js');

var MiniCal = React.createClass({

  _data: data,

  render: function() {

    return (
      <div className='dc dc--mini'>
        <Month
          year={2015}
          month={3}
        />
      </div>
    );
  }
});

module.exports = MiniCal;
