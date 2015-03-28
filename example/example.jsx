var React = require('react');

var FullCal = React.createFactory(require('./calendars/full-calendar.jsx'));
var MiniCal = React.createFactory(require('./calendars/mini-calendar.jsx'));

React.render(new FullCal(), document.getElementById('example-full-calendar'));
React.render(new MiniCal(), document.getElementById('example-mini-calendar'));
