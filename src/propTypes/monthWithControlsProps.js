var React = require('react');

module.exports = {
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
};
