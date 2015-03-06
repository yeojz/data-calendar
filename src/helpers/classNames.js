/*
 * className
 *
 * Takes in an object or string option,
 * passes it into `cx` and concats with
 * optional additional classNames
 *
 * Depends on `cx` modules
 *
 * @param string|object className to modularize, or an object of key/values.
 *                      In the object case, the values are conditions that
 *                      determine if the className keys should be included.
 * @param string|array  className in string case or an Array of classNames
 * @return string       Renderable space-separated CSS className.
 */

var cx = require('./cx');

module.exports = function(options, classNames){

  var classNameArray = [];

  if (options instanceof Object){
    classNameArray.push(cx(options));
  }

  if (typeof classNames === 'string' && classNames.trim() !== ''){
    classNameArray.push(classNames);

  } else if (Array.isArray(classNames)){
    classNameArray.concat(classNames);
  }

  return classNameArray.join(' ');
};
