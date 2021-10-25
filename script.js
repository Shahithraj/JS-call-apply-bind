call and apply - They can both be used to call an object method with another object as argument.

call - function is invoked directly by passing in object method which points to "this" keyword.
1.
function  user(){
console.log(this);  // window
}
user();

2.
function  user(){
    console.log(this);  
    }
    user.call({title:"Guvi"}); // {title:Guvi}

3.  
function  user(obj){
        console.log(this.title + obj);  
        }
        user.call({title:"Guvi"},"geek"); //Guvigeek

 4.   
 var obj = {num:2}
 function getnum(a,b,c){
     console.log(this.num + a +b + c); // 2+3+4+5=14
 }   
 getnum.call(obj,3,4,5)


5.

let person1 = {
    firstName : "Raj",
    lastName : "Mohammed",
     fullName : function(){
     console.log(this.firstName +" " + this. lastName);
     }
}
 person1.fullName() // Raj Mohammed

//borrow the function of person1
let person2 = {
    firstName : "MS",
    lastName : "Dhoni"
}
person1.fullName.call(person2) 

same function used for different variables 
let fullName = function(a){
    console.log(this.firstName +" " + this. lastName +" is " +a);
}
fullName.call(person1,"good") //Raj Mohammed is good


let person2 = {
    firstName : "MS",
    lastName : "Dhoni"
}

fullName.call(person2,"wicketkeeper") 

================================================================================================

apply method - pass the arguments in the array

let arr = [1,2,3]
let  obj = {num:3}
let sum = function(a,b,c){
    return this.num + a +b+c;  //3+1+2+3 = 9
}
console.log(
sum.apply(obj,arr))


let fullName = function(a){
    console.log(this.firstName +" " + this. lastName +" is " +a);
}
 


let person2 = {
    firstName : "MS",
    lastName : "Dhoni"
}
fullName.call(person2, "good")

fullName.apply(person2,["wicketkeeper"]) 
===========================================================================================================

bind method - the function fullName is called by an another variables, which is not invoked directly.

let myName= fullName.bind(person2, "good")
myName(); // MS Dhoni is good