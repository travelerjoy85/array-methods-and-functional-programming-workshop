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

}

function some(predicate, theArray) {

}

function indexOf(item, theArray) {

}

function findIndex(predicate, theArray) {

}

function first(n, theArray) {

}

function last(n, theArray) {

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
