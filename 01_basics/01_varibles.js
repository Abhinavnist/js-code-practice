const accountId = 14445
let accountEmail = "abhinav@google.com"
var accountPassword = "12345"
accountCity = "jaipur" //possible that type of variable
let accountState

// accountId = 2
accountEmail = "hc@gmail.com"
accountPassword = "2324"
accountCity = "Bengaluru"

console.log(accountId)

// prefere not to use var
// because of issue in block scope and functional scope
console.table([
  accountEmail,
  accountId,
  accountPassword,
  accountCity,
  accountState,
])
