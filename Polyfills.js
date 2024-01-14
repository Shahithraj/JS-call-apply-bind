1.Call

Function.prototype.myCall = function (thisContext, ...args) {
  thisContext = thisContext || window
  
  // It will have student obj, if obj does not pass it will have window obj
  console.log(thisContext) 
  
  // It will create unique key
  let uniquekey = Symbol() 

  // 'this' will be the function(getDetails)
  thisContext[uniquekey] = this 

  // thisContext.uniquekey will have the getDetails function and it is invoked
  let result = thisContext[uniquekey](...args) 

  return result // now getDetails funtion will be inside the student obj 
/*
student = {
  name :"Adam"
  age: 20,
  uniquekey :  getDetails (city, state) {
    // this will refer to student obj
    console.log(this.name, this.age)
    console.log(city, state)
  }
  */
}
  

let student = {
  name :"Adam"
  age: 20,
}
  function getDetails (city, state) {
    console.log(this.name, this.age)
    console.log(city, state)
  }
  getDetails.myCall(student, "Chennai" , "TN")
