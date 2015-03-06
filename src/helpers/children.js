/*
 * children
 *
 * Takes in a list of child nodes and
 * checks them against their statics
 *
 * @param array   this.props.children
 * @param string  the object key for the static paramter
 * @param string  sample element
 *
 * @returns array resultant children nodes
 */

var React = require('react');
var invariant = require('./invariant');
var ReactChildren = React.Children;

module.exports = function(childNodes, name, type){

  var children = [];

  ReactChildren.forEach(childNodes, function(child) {

    if (child === null) {
      return;
    }

    invariant(
      child.type[name],
      'child type should be a ' + (type || name)
    );

    children.push(child);
  });

  return children;
};
