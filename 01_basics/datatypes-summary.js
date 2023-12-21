// for mastering the js we have to learn object and webevent or browser event

// Premitive data type
// 7 types : String, Number, Boolean , null , undefined ,Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol("123")
const anotherId = Symbol("123")
// console.log(id === anotherId) //false not same type

const bigNumber = 34564534534434534656345n

//Non Premitive or Referance type
//Array, objects, Function
const heros = ["shaktiman", "naagra", "doga"]
let myObj = {
  name: "hitesh",
  age: 22,
}
const myFunciton = function () {
  console.log("hello world")
}
//typeof is use to know the data type
// console.log(typeof outsideTemp) //object
// console.log(typeof myFunciton) //function

//************************memory*************** */
//stack memory( Primitive ) or heap memory (non-primitive)
let myName = "Abhinav"
let anotherName = myName
console.log(anotherName)
anotherName = "Kumar"
console.log(anotherName)

let userOne = {
  email: "abhinav@gmail.com",
  upi: "abhinav@ybl",
}

let userTwo = userOne

userTwo.email = "abhinav@google.com"

console.log(userOne.email)
console.log(userTwo.email) //change in the object change in both
