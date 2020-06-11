// Define a variable 'alphabet' which is an array of 26 objects
// Each object in the array contains a unique 'letter' property (one for each in the alphabet) and a 'count' property (initialised at 0)
let alphabet = [
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

// Define a function called 'charCounter', which takes a single argument 'word' (a string value)
let charCounter = function (word) {

    // Convert 'word' to all lowercase to avoid any issues with user input having capital letters


    // Iterate through each object in the 'alphabet' array
    for (let object = 0; object < alphabet.length; object++) {

        // Then iterate through each character in the 'word' string
        for (let i = 0; i < word.length; i++) {

            // Use conditional logic to check the value of each character
            // Compare each character to the 'letter' property of the current object in the outer for loop
            // If the character matches the letter in the object, increase the object count by 1
            if (word[i] === alphabet[object].letter) {
                alphabet[object].count = alphabet[object].count + 1
            }
    
        } // End of inner for loop (through 'word' characters)

    } // End of outer for loop (through objects)
    
    // Define a function 'highestCount' to see which object count has the highest value
    let highestCount = function () {

        

    }

    console.log(`The word you entered is: ${word}`);
    console.log(`This word has a total of ${word.length} characters.`);
    console.log(`The most frequently occurring character is: ?`);
    console.log(`This character appears ? times`);

} // End of function 'charCounter'

charCounter("aaabbc")
console.log(alphabet)

// console.log(alphabet[0].letter)