// Define a variable 'alphabet' which is an array of 26 objects
// Each object in the array contains a unique 'letter' property (one for each in the alphabet) and a 'count' property (initialised at 0)
const alphabet = [
    {letter: "a", count: 0},
    {letter: "b", count: 0},
    {letter: "c", count: 0},
    {letter: "d", count: 0},
    {letter: "e", count: 0},
    {letter: "f", count: 0},
    {letter: "g", count: 0},
    {letter: "h", count: 0},
    {letter: "i", count: 0},
    {letter: "j", count: 0},
    {letter: "k", count: 0},
    {letter: "l", count: 0},
    {letter: "m", count: 0},
    {letter: "n", count: 0},
    {letter: "o", count: 0},
    {letter: "p", count: 0},
    {letter: "q", count: 0},
    {letter: "r", count: 0},
    {letter: "s", count: 0},
    {letter: "t", count: 0},
    {letter: "u", count: 0},
    {letter: "v", count: 0},
    {letter: "w", count: 0},
    {letter: "x", count: 0},
    {letter: "y", count: 0},
    {letter: "z", count: 0}
]

// Define a new empty array 'wordCharacterCount' which will later contain the values of all the 'count' properties in the original 'alphabet' array
let wordCharacterCount = []

// Define a function called 'charCounter', which takes a single argument 'word' (a string value)
const charCounter = function (word) {

    // Iterate through each object in the 'alphabet' array
    alphabet.forEach(function (item) {
        
        // Then iterate through each character in the 'word' string
        for (let i = 0; i < word.length; i++) {

            // Use conditional logic to check the value of each character
            // Compare each character to the 'letter' property of the current object in the outer forEach() loop
            // If the character matches the letter in the object, increase the object count by 1
            // Convert 'word' to all lowercase to avoid any issues with user input having capital letters
            if (word.toLowerCase()[i] === item.letter) {
                item.count = item.count + 1
            }
    
        } // End of inner for loop (checking each 'word' character)

    }) // End of first outer alphabet.forEach() loop
    
    // Find out which object 'count' has the highest value
    // Iterate through each object in the 'alphabet' array
    alphabet.forEach(function (item) {

        // Then store the 'alphabet.count' values inside the 'wordCharacterCount' array
        wordCharacterCount.push(item.count)

    }) // End of second alphabet.forEach() loop

    // Determine which item in 'wordCharacterCount' has the highest value (i.e. the highest number of times a character appears in the 'word')
    let freqCharNum = Math.max(...wordCharacterCount)

    // Find out which item in 'wordCharacterCount' has the highest value
    let freqChar = []
    // Iterate through each object in the 'alphabet' array
    alphabet.forEach(function (item) {

        // If value of 'freqCharNum' matches the value of 'alphabet.count'
        if (freqCharNum === item.count) {
            freqChar.push(item.letter.toUpperCase())
        }

    }) // End of third alphabet.forEach() loop

    // Log messages to the screen explaining the results! :)
    console.log(`The word you entered is: '${word}'`)
    console.log(`This word has a total of ${word.length} characters`)

    // Check if there is more than one letter that appears most frequently & print a different message
    if (freqChar.length === 1) {
        console.log(`The most frequently occurring letter is '${freqChar}', which appears ${freqCharNum} times`)
    } else {
        console.log(`The most frequently occurring letters are '${freqChar}', which appear ${freqCharNum} times each`)
    }

} // End of function 'charCounter'

// Call the function and provide a 'word'
charCounter("Supercalifragilisticexpialidocious")
