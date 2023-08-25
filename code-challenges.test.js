// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("applySecretCode", () => {
    it("applies secret code to a string", () => {
      const secretCodeWord1 = "Lackadaisical"
      const secretCodeWord2 = "Gobbledygook"
      const secretCodeWord3 = "Eccentric"
  
      expect(applySecretCode(secretCodeWord1)).toBe("L4ck4d41s1c4l")
      expect(applySecretCode(secretCodeWord2)).toBe("G0bbl3dyg00k")
      expect(applySecretCode(secretCodeWord3)).toBe("3cc3ntr1c")
    })
  })


const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.
const applySecretCode = (inputString) => {
// Mapping of characters to their secret code replacements
    const codeMap = {
      "a": "4",
      "e": "3",
      "i": "1",
      "o": "0"
    };
// Initialize an empty string to store the result
    let result = '';
 // Loop through each character in the input string
    for (const char of inputString) {
// Convert the current character to lowercase and check if it exists in the codeMap
      if (codeMap[char.toLowerCase()]) {
// If the character has a secret code replacement, add it to the result
        result += codeMap[char.toLowerCase()];
      } else {
// If the character doesn't have a secret code replacement, add the original character to the result
        result += char;
      }
    }
// Return the final result after applying the secret code transformation
    return result;
  }


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.


describe("filterWordsByLetter", () => {
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
  
    it("filters words containing the specified letter", () => {
      const filterLetterA = "a"
      const expectedOutputA = ["Mango", "Apricot", "Peach"]
      expect(filterWordsByLetter(fruitArray, filterLetterA)).toEqual(expectedOutputA)
  
      const filterLetterE = "e"
      const expectedOutputE = ["Cherry", "Blueberry", "Peach"]
      expect(filterWordsByLetter(fruitArray, filterLetterE)).toEqual(expectedOutputE)
    })
  })
  


const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const filterLetterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const filterLetterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

const filterWordsByLetter = (wordsArray, targetLetter) => { //create function taking two parameters
    return wordsArray.filter(word => word.toLowerCase().includes(targetLetter.toLowerCase()))
    //use .filter method to create new array
    //check if lowercase version of word contains lowercase verion of targetLetter.
    //use .includes to set condition
  }





// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.


 //const hand1 = [5, 5, 5, 3, 3]
// // Expected output: true
// const hand2 = [5, 5, 3, 3, 4]
// // Expected output: false
// const hand3 = [5, 5, 5, 5, 4]
// // Expected output: false
// const hand4 = [7, 2, 7, 2, 7]
// // Expected output: true

  
  
  // a) Create a test with expect statements using the variable provided.
  describe("hasFullHouse", () => {
    it("checks if a hand has a full house", () => {
      const hand1 = [5, 5, 5, 3, 3]
      const hand2 = [5, 5, 3, 3, 4]
      const hand3 = [5, 5, 5, 5, 4]
      const hand4 = [7, 2, 7, 2, 7]
      
      expect(hasFullHouse(hand1)).toBe(true)
      expect(hasFullHouse(hand2)).toBe(false)
      expect(hasFullHouse(hand3)).toBe(false)
      expect(hasFullHouse(hand4)).toBe(true)
    })
  })
  
// b) Create the function that makes the test pass.
const hasFullHouse = (hand) => {
    const counts = {}
    for (const num of hand) {
      if (counts[num]) {
        counts[num]++
      } else {
        counts[num] = 1
      }
    }
  
    let hasPair = false
    let hasThreeOfAKind = false
  
    for (const num in counts) {
      if (counts[num] === 2) {
        hasPair = true
      }
      if (counts[num] === 3) {
        hasThreeOfAKind = true
      }
    }
  
    return hasPair && hasThreeOfAKind
  }
  

// Pseudo code:
// define function
//intialize card count mapping, keeps track of each count
//count cards in hand using for loop
//initialize boolean values, hasPair and hasThreeOfaAkind to false
//check pairs to see if there are 3 of a kind using for loop and equality operators