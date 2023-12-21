const name = "Abhinav"
const repoCount = 50
// console.log(name + repoCount + "value") //outdated insted this use backtik(``)
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) //known as string interpolation
const gameName = new String("Abhinav-aabjan-akfjlk") //object it has method
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf("A"))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 3)
console.log(anotherString)

const newStringone = "   Abhinav    "
console.log(newStringone)
console.log(newStringone.trim()) //use to remove space

const url = "https://localhost:3000/abhinav%20kumar"
console.log(url.replace("%20", "-"))

console.log(url.includes("abhinav")) //check is this available

console.log(gameName.split("-")) //change in the array use split
