
// Manual Virtual Dom
require('../helpers');

var React = require('react');
var assert = require('assert');


describe('Test', function(){

  //var Test = require('')

  var component;

  beforeEach(function(done){
    component = React.render(
      React.createElement(Test, {}),
      document.body, 
      function(){
        setTimeout(done);
      }
    );
  });

  afterEach(function(done) {
    React.unmountComponentAtNode(document.body);
    setTimeout(done);
  });

});