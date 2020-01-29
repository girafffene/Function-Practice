// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6]
var strings = ["this", "is", "a", "collection", "of", "words"]
var instructors = [
  { firstname: "JD", teaches: "JavaScript" },
  { firstname: "Tim", teaches: "JavaScript" },
  { firstname: "Brit", teaches: "Ruby" },
  { firstname: "Joe", teaches: "iOS" },
  { firstname: "Jake", teaches: "JavaScript" },
  { firstname: "Will", teaches: "JavaScript" },
  { firstname: "Calvin", teaches: "JavaScript" },
  { firstname: "James", teaches: "Ruby" }
]

// ---------------------------
// 1. Find largest number
// ---------------------------

var largest = 0

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i]
  }
}

console.log(largest)

// ---------------------------
// 2. Find longest string
// ---------------------------

var longest = ""

for (let i = 0; i < strings.length; i++) {
  if (strings[i].length > longest.length) {
    longest = strings[i]
  }
}

console.log(longest)

// ---------------------------
// 3. Find even numbers
// ---------------------------

var evens = []

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evens.push(numbers[i])
  }
}

console.log(evens)

// ---------------------------
// 4. Find odd numbers
// ---------------------------

var odds = []

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    odds.push(numbers[i])
  }
}

console.log(odds)

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
var isWords = []

for (let i = 0; i < strings.length; i++) {
  if (strings[i].includes("is")) {
    isWords.push(strings[i])
  }
}

console.log(isWords)

// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------

var both = numbers.concat(strings)

console.log(both)

// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------

var jsInstructors = []

for (let i = 0; i < instructors.length; i++) {
  if (instructors[i].teaches === "JavaScript") {
    jsInstructors.push(instructors[i].firstname)
  }
}

console.log(jsInstructors.sort())
