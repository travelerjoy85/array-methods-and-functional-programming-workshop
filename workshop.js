function forEach(callback, theArray) {
  /*
  This is a little hint to get you started ;)
  
  for (... theArray.length ...) {
    ...
    callback(...)
    ...
  }
  */
  // As per instruction, each element in the array, so the first thought is using loop.
  // As per instruction, the callback function only receives one element, which is the current item, so we pass the current item we loop thorugh.
  for(var i = 0; i < theArray.length; i++){
    callback(theArray[i]);
  }
}

function map(mappingFunction, theArray) {
  // the result will be an array, so setup a variable as an empty array.
  // Using for loop to loop through all the elements, since it's an array, need to push all the elements to the new array.
  var newArr = [];
  for(var i = 0; i < theArray.length; i++){
    newArr.push(mappingFunction(theArray[i]));
  }
  return newArr;
}

function filter(predicate, theArray) {
  // First, as per instruction, the result is a new array, so setup a variable as an empty array.
  // loop through all the elements in the array and only grab those: predicate(elements in the array) === true, then push into the new array.
  
  // var newArr = [];
  // for(var i = 0; i < theArray.length; i++){
  //   newArr.push(predicate(theArray[i]) == true);
  // }
  // return newArr;
  
  // The test of above code failed, it said should not use prototype.filter and should work with an empty array, using if/else.
  var newArr = [];
  for(var i = 0; i < theArray.length; i++){
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
  else{
    for(var i = 0; i < theArray.length; i++){
      if(!predicate(theArray[i])){
        return false;
        // Have to put return false inside the loop cuz as per instruction, once it catches the false
      }
    }
    return true;
  }
}

function some(predicate, theArray) {
  if(theArray.length === 0){
    return false;
  }
  else{
    for(var i = 0; i < theArray.length; i++){
      if(predicate(theArray[i])){
        return true; // The same theory as above, need to stop once it catches the first element that pases. So need to put return true inside the loop.
      }
    }
    return false;
  }
}

function indexOf(item, theArray) {
  if(theArray.length === 0){
    return -1;
  }
  else{
    for(var i = 0; i < theArray.length; i++){
      if(theArray[i] === item){
        return i;
      }
    }
    return -1;
  }
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
  if(arguments.length === 1 && typeof(n) === "object"){
    return n[0];
  }
  else if(arguments.length === 2 && typeof(n) === "number"){
    if(n > 0 && n < theArray.length){
      return theArray.slice(0, n);
    }
    else if(n > theArray.length){
      return theArray;
    }
    return [];
  }
}

function last(n, theArray) {
  if(arguments.length === 1 && typeof(n) === "object"){
    return n[n.length - 1];
  }
  else if(arguments.length === 2 && typeof(n) === "number"){
    if(n > 0 && n < theArray.length){
      return theArray.slice(theArray.length-n, theArray.length);
    }
    else if(n > theArray.length){
      return theArray;
    }
    return [];
  }
}

function pluck(property, arrayOfObjects) {
  var newArr = [];
  for(var i = 0; i < arrayOfObjects.length; i++){
    newArr.push(arrayOfObjects[i][property]);
  }
  return newArr;
}

function flatten(theArray) {
  var newArr = [];
  for(var i = 0; i < theArray.length; i++){
    if(Array.isArray(theArray[i])){
      newArr = newArr.concat(flatten(theArray[i]));
    }
    else{
      newArr.push(theArray[i]);
    }
  }
  return newArr;
}

function negate1(predicate) {
  return function(){
    return !predicate.apply(this, arguments);
  };
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
