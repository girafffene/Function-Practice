// READ FIRST
// The assertions are there only to help you make sure
// your functions are written correctly. There is no need
// to change them. If you write your function correctly,
// the assertions will do nothing. If you write your function
// incorrectly or not at all, your assertions will fail
// in your console.

// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

const num1 = 5
const num2 = 6

function sum(num1, num2) {
  return num1 + num2
}

console.assert(sum(2, 4) === 6)
console.assert(sum(45, 23) === 68)
console.assert(sum(-2, -57) === -59)

// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.
const numb1 = 5
const numb2 = 10
const numb3 = 90

function avg(numb1, numb2, numb3) {
  return (numb1 + numb2 + numb3) / 3
}

console.assert(avg(2, 3, 4) === 3)
console.assert(avg(234, 63, 234) === 177)
console.assert(avg(123, 234, 345) === 234)

// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

const string = "I am just a short sentence."

function getLength(string) {
  return string.length
}

console.assert(getLength("Michael") === 7)
console.assert(getLength("Javascript") === 10)
console.assert(getLength("supercalifragilisticexpialidocious") === 34)

// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the first
// parameter is greater than the second. Otherwise
// the function should return `false`.

function greaterThan(num3, num4) {
  if (num3 > num4) {
    return true
  } else {
    return false
  }
}

console.assert(greaterThan(2, 1) === true)
console.assert(greaterThan(23, 23) === false)
console.assert(greaterThan(-234, 1) === false)

// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

const name = "Michael"

function greet(name) {
  return `Hello, ${name}!`
}

console.assert(greet("Michael") === "Hello, Michael!")
console.assert(greet("R2D2") === "Hello, R2D2!")
console.assert(greet("Iron Man") === "Hello, Iron Man!")

// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

const word1 = "and"
const word2 = "went"
const word3 = "up"
const word4 = "yesterday"

function madlib(word1, word2, word3, word4) {
  return `The ${word1} brown ${word2} ${word3} over the ${word4}.`
}

console.assert(
  madlib("quick", "fox", "jumps", "fence") ===
    "The quick brown fox jumps over the fence."
)
console.assert(
  madlib("fat", "rabbit", "hops", "wall") ===
    "The fat brown rabbit hops over the wall."
)
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////