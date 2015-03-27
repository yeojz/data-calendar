/*
 * mergePropType
 *
 * Clone and do a naive merge of propTypes.
 * if propType already exists, the propType from second
 * argument will take precendence.
 *
 * @param [object...]   objects parameters
 * @return object       an object of propTypes
 */

export default function() {

  var obj = {};

  for (let i in arguments){
    if (arguments.hasOwnProperty(i)){

      let arg = arguments[i];

      if (!(arg instanceof Object)){
        throw new Error('[mergePropType] One or more arguments is not of type `object`.');
      }

      for (let key in arg){
        if (arg.hasOwnProperty(key)){
          obj[key] = arg[key];
        }
      } // endfor
    } // endif arguments.hasOwnProperty
  } // endfor

  return obj;
}
