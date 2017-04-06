function forEach(callback, theArray) {
  /*
  This is a little hint to get you started ;)
  
  for (... theArray.length ...) {
    ...
    callback(...)
    ...
  }
  */
  for (var i = 0; i < theArray.length; i++) {
    callback(theArray[i]);
  }
}

function map(mappingFunction, theArray) {
  var newMap = [];
  for (var i = 0; i < theArray.length; i++) {
    newMap.push(mappingFunction(theArray[i]))
  }
  return newMap;
}

function filter(predicate, theArray) {
  var newArr = [];
  for (var i = 0; i < theArray.length; i++){
    if(predicate(theArray[i])){
      newArr.push(theArray[i]);
    }
  }
  return newArr;
}

function every(predicate, theArray) {
  if(theArray.length === 0){
    return true;
  }
 
  for (var i = 0; i < theArray.length; i++){
    if(!predicate(theArray[i])){
      return false;
    
    }
    
  }
  return true;
}

function some(predicate, theArray) {
  if(theArray.length === 0){
    return false;
  }
  for(var i = 0; i < theArray.length; i++){
    if(predicate(theArray[i])){
      return true;
    }
  }
  return false;
}

function indexOf(item, theArray) {
  if(theArray.length === 0){
    return -1;
  }
  for(var i = 0; i < theArray.length; i++){
    if(item === theArray[i]){
      return i;
    }
  }
  return -1;
}

function findIndex(predicate, theArray) {
  for(var i = 0; i < theArray.length; i++){
    if(predicate(theArray[i])){
      return i;
    }
  }
  return -1;
}

function first(n, theArray) {
  var newArr = [];
  if(arguments.length === 1 && typeof(n) === "object"){
    return n[0];
  }
  else if(arguments.length === 2 && typeof(n) === "number"){
    if(n > 0 && n < theArray.length){
      return theArray.slice(0, n);
    }
    else if(n < 0){
      return newArr;
    }
  }
  return theArray;
}

function last(n, theArray) {
  var newArr = [];
  if(arguments.length === 1 && typeof(n) === "object"){
    return theArray[theArray.length-1];
  }
}

function pluck(property, arrayOfObjects) {

}

function flatten(theArray) {

}

function negate1(predicate) {

}

function negate2(predicate) {

}

function compose1(fun1, fun2) {

}

function compose2(arrOfFuncs) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    forEach: forEach,
    map: map,
    filter: filter,
    every: every,
    some: some,
    indexOf: indexOf,
    findIndex: findIndex,
    first: first,
    last: last,
    pluck: pluck,
    flatten: flatten,
    negate1: negate1,
    negate2: negate2,
    compose1: compose1,
    compose2: compose2
};
