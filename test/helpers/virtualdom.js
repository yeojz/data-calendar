
module.exports = (function(){
  var jsdom = require('jsdom').jsdom;

  var markup = '<!doctype html><html><head></head><body></body></html>';

  global.document = jsdom(markup);
  global.window = document.parentWindow;
  global.navigator = document.parentWindow.navigator;

})();
