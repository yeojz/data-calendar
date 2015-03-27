var React = require('react');

export default {
  controls: React.PropTypes.oneOfType([
                  React.PropTypes.bool,
                  React.PropTypes.func
                ]),

  // Show the title of the month
  // default: 'MMMM YYYY'
  monthTitle: React.PropTypes.oneOfType([
                    React.PropTypes.bool,
                    React.PropTypes.string, // must be a valid date formatting string
                    React.PropTypes.func
                  ]),

  // Format of day name according to moment.js
  // Valid: 'min', 'long', 'short'
  dayNameFormat: React.PropTypes.string,

  // Markup for Previous Button
  btnPrev: React.PropTypes.oneOfType([
              React.PropTypes.string,
              React.PropTypes.element
            ]),

  // Markup for Next Button
  btnNext: React.PropTypes.oneOfType([
              React.PropTypes.string,
              React.PropTypes.element
            ]),

  // Markup for Today Button
  btnToday: React.PropTypes.oneOfType([
              React.PropTypes.string,
              React.PropTypes.element
            ])
};
