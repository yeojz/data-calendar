
export default {
  getClipboardProps,
  getFormProps,
  getKeyboardProps,
  getMouseProps,

  setParams,

  _getListedProps,
  _listClipboardEvents,
  _listFormEvents,
  _listMouseEvents,
  _listKeyboardEvents
};


function setParams(){
  let [listOfEvents, ...args] = arguments;

  for (let event in listOfEvents){
    if (listOfEvents.hasOwnProperty(event)){
      listOfEvents[event] = listOfEvents[event].bind(null, ...args);
    }
  }

  return listOfEvents;
}


function _getListedProps(source, listOfProps, prefix){
  let availableEvents = {};

  listOfProps.forEach((prop) => {

    let sourceProp;

    if (typeof prefix !== 'undefined'){
      sourceProp = prop.substring(0, 2) + prefix + prop.substring(2);

    } else {
      sourceProp = prop;
    }

    if (sourceProp in source){
      availableEvents[prop] = source[sourceProp];
    }
  });

  return availableEvents;
}


function _listMouseEvents(){
  return [
    'onClick',
    'onContextMenu',
    'onDoubleClick',
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp'
  ];
}


function getMouseProps(props, prefix){
  return _getListedProps(props, _listMouseEvents(), prefix);
}


function _listFormEvents(){
  return [
    'onChange',
    'onInput',
    'onSubmit'
  ];
}


function getFormProps(props, prefix){
  return _getListedProps(props, _listFormEvents(), prefix);
}


function _listKeyboardEvents(){
  return [
    'onKeyDown',
    'onKeyPress',
    'onKeyUp'
  ];
}


function getKeyboardProps(props, prefix){
  return _getListedProps(props, _listKeyboardEvents(), prefix);
}


function _listClipboardEvents(){
  return [
    'onCopy',
    'onCut',
    'onPaste'
  ];
}


function getClipboardProps(props, prefix){
  return _getListedProps(props, _listClipboardEvents(), prefix);
}

