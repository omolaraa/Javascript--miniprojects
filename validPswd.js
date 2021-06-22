// && - one false makes everything false
// All requirements (&&) must be met else return false.
function isValidPassword(password, username) {
 if (password.length >= 8 && password.indexOf(' ') === -1 && password.indexOf(username) === -1) {
  return true;
 }
 return false;
}

const pass = isValidPassword('234gthyygdfd', 'dogLuvr') // all requirements are met (true) (ture && true && true)
const pwd = isValidPassword('dogLuvrhyygdfd', 'dogLuvr') // one requirement was not met (false) (true && true && false)

console.log(pass)
console.log(pwd)

// One true makes everything true
// If just one requirement (||) is not met (i.e password is less than 8, password contains spaces, password contains username) return false.
function isValidPassword(password, username) {
 if (password.length <= 8 || password.indexOf(' ') !== -1 || password.indexOf(username) !== -1) {
  return false; // when a condition is true the first line executes
 }
 return true; // when a condition is false the second line executes
}

const pass2 = isValidPassword('234gthyygdfd', 'dogLuvr') // all conditions are false, therefore true is returned. (false || false || false) = false
const pwd2 = isValidPassword('dogLuvrhyygdfd', 'dogLuvr') // one conditions is true, therefore false is returned. (false || false || true) = true

console.log(pass2)
console.log(pwd2)