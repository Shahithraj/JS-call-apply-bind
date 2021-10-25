// let obj ={
//     a:1,
//     b:2
// }

// function add(c){
//     console.log(this.a + this.b+c )
// }

// add.call(obj,3)

// let mammal = function(legs){
//     this.legs = legs
// }

// let cat = function(legs,isdomestic){
//     mammal.call(this,legs)
//     this.isdomestic =isdomestic
// }
// let lion = new cat(4,false)
// console.log(lion)


// FUNCTION CURRYING

let multiply = (x,y)=>{
    console.log(x*y)
}

let multiplyByTwo = multiply.bind(this,2,3)  // it will bind the above function to multiplyByTwo function
// x and y take the above value only
multiplyByTwo(5)

let multiplyByThree = multiply.bind(this,3)  // it will bind the above function to multiplyByThree function

multiplyByThree(5)
