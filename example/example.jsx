var React = require('react');

var Month = require('../src/addons').Month;

var View = React.createClass({

  _data: {
    20150304: [{
      title: 'Do 1',
      startDate: new Date('Wed Mar 04 2015 20:50:43 GMT+0800 (SGT)'),
      endDate: new Date('Wed Mar 04 2015 21:50:43 GMT+0800 (SGT)'),
      description: 'Long Long Description'
      }, {
      title: 'Do 1.2',
      startDate: new Date('Wed Mar 04 2015 22:50:43 GMT+0800 (SGT)'),
      endDate: new Date('Wed Mar 04 2015 23:50:43 GMT+0800 (SGT)'),
      description: 'Long Long Description'
    }],

    20150303: [{
      title: 'Do 2',
      startDate: new Date('Tue Mar 03 2015 20:50:43 GMT+0800 (SGT)'),
      endDate: new Date('Tue Mar 03 2015 21:50:43 GMT+0800 (SGT)'),
      description: 'Short Short Description'
    }],

    20150203: [{
      title: 'Do 3',
      startDate: new Date('Mon Feb 03 2014 20:50:43 GMT+0800 (SGT)'),
      endDate: new Date('Mon Feb 03 2014 21:50:43 GMT+0800 (SGT)'),
      description: '3rd Description'
    }]
  },

  _eventsGetter: function(date){
    return this._data[date];
  },

  _eventDataGetter: function(eventData){
    return eventData.title || 'Event';
  },

  _eventRenderer: function(eventData){
    return eventData.title || 'Event';
  },

  render: function() {

    return (
      <Month
        year={2015}
        month={3}
        eventDataGetter={this._eventDataGetter}
        eventRenderer={this._eventRenderer}
        eventsGetter={this._eventsGetter}
      />
    );
  }
});


var ViewHandler = React.createFactory(View);

React.render(
  new ViewHandler(),
  document.getElementById('calendar')
);
