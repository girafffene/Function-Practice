// ---------------------
// Define a function max() that takes two numbers as
// arguments and returns the largest of them. Use the
// if-then-else construct available in JavaScript.
// ---------------------

function max(numOne, numTwo) {
  if (numOne > numTwo) {
    return numOne
  } else {
    return numTwo
  }
}

console.assert(max(2, 3) === 3)
console.assert(max(23, 24) === 24)
console.assert(max(-23, 12) === 12)

// ---------------------
// Define a function maxOfThree() that takes three
// numbers as arguments and returns the largest of them.
// ---------------------

const nu1 = 2
const nu2 = 4
const nu3 = 6

function maxOfThree(nu1, nu2, nu3) {
  return Math.max(nu1, nu2, nu3)
}

console.assert(maxOfThree(2, 56, 3) === 56)
console.assert(maxOfThree(12, 3, 4) === 12)
console.assert(maxOfThree(-12, 4, -5) === 4)

// ---------------------
// Write a function isVowel() that takes a character (i.e. a
// string of length 1) and returns true if it is a
// vowel, false otherwise.
// ---------------------

function isVowel(char) {
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u" ||
    char === "A" ||
    char === "E" ||
    char === "I" ||
    char === "O" ||
    char === "U"
  ) {
    return true
  } else {
    return false
  }
}

console.assert(isVowel(0) === false)
console.assert(isVowel("B") === false)
console.assert(isVowel("b") === false)
console.assert(isVowel("a") === true)
console.assert(isVowel("E") === true)
console.assert(isVowel("2") === false)

// ---------------------
// Write a function rovarspraket() that will translate
// a text into "Rovarspraket". That is, double every
// consonant and place an occurrence of "o" in between.
// For example, translate("this is fun") should return
// the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(a) {
  if (typeof a !== "string") {
    return a + ""
  }

  var b = ""
  for (var i = 0; i < a.length; i++) {
    if (isVowel(a[i])) {
      b += a[i]
    } else {
      b += a[i] + "o" + a[i]
    }
  }
  return b
}

console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")

// ---------------------
// Define a function reverse() that computes the reversal
// of a string. For example, reverse("jag testar") should
// return the string "ratset gaj".
// ---------------------

function reverse(str) {
  var splitString = str.split("")

  var reverse = splitString.reverse()

  var joinArray = reverse.join("")

  return joinArray
}

reverse("hello")

console.assert(reverse("books") === "skoob")
console.assert(
  reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew"
)