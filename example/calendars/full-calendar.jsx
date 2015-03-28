var React = require('react');

var Month = require('../dep').Addons.MonthWithControls;

var data = require('./data.js');

var FullCal = React.createClass({

  _data: data,

  _entriesGetter: function(date){
    return this._data[date];
  },

  _entryDataGetter: function(entryData){
    return entryData.title || 'Event';
  },

  _entryRenderer: function(entryData){
    return entryData.title || 'Event';
  },

  render: function() {

    return (
      <div className='dc dc--full'>
        <Month
          year={2015}
          month={3}
          entryDataGetter={this._entryDataGetter}
          entryRenderer={this._entryRenderer}
          entriesGetter={this._entriesGetter}
        />
      </div>
    );
  }
});

module.exports = FullCal;
