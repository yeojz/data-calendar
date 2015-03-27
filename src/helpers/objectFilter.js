/*
 * objectFilter
 *
 * Removes a list of keys from an object
 *
 * @param object        the object to be filtered
 * @param string|array  keys to remove
 *
 * @returns object      the resultant object
 */

export default function(obj, keysToRemove){

  var removeKeys = keysToRemove;

  // Convert key to array
  if (typeof keysToRemove === 'string'){
    removeKeys = [keysToRemove];
  }

  // If still not array, throw error
  if (!Array.isArray(removeKeys)){
    throw new Error('[ObjectFilter] Expects argument 1 to be of type `array` or `string`');
  }

  var keys = Object.keys(obj);
  var newObj = {};

  keys.forEach((key) => {

    // Check for keys in remove array
    if (removeKeys.indexOf(key) < 0){
      newObj[key] = obj[key];
    }
  });

  return newObj;
}
