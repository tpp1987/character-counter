// Define a variable 'alphabet' which is an array of 26 objects
// Each object in the array contains a unique 'letter' property (one for each in the alphabet) and a 'count' property (initialised at 0)
let alphabet = [
    {letter: "a", count: 0},
    {letter: "b", count: 0},
    {letter: "c", count: 0},
]

// Define a function called 'charCounter', which takes a single argument 'word' (a string value)
function charCounter(word) {

    // Iterate through each object in the 'alphabet' array
    for (let i = 0; i < alphabet.length; i++) {

        // Then iterate through each character in the 'word' string
        for (let i = 0; i < word.length; i++) {

            // Use conditional logic to check the value of each character. If it equals "a", increase count of letterA variable; if not, check "b"; and so on...
            if (word[i] === "a") {
                letterA++
            } else if (word[i] === "b") {
                letterB++
            } else if (word[i] === "c") {
                letterC++
            }
    
        }

    }
    

} // End of function 'charCounter'

console.log(alphabet[0].letter)