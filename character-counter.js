// Define bindings for each letter of the alphabet, and assign each a numerical value of 0
let letterA = 0, letterB = 0, letterC = 0, letterD = 0, letterE = 0, letterF = 0, letterG = 0, letterH = 0, letterI = 0, letterJ = 0, letterK = 0, letterL = 0, letterM = 0, letterN = 0, letterO = 0, letterP = 0, letterQ = 0, letterR = 0, letterS = 0, letterT = 0, letterU = 0, letterV = 0, letterW = 0, letterX = 0, letterY = 0, letterZ = 0;

let letters = [
    {name: letterA, value: 0},
    {name: letterA, value: 0},
]

// Define a function called charCounter, which takes a single argument (a word/string)
function charCounter(word) {

    // Iterate through each letter in the word/string in turn
    for (let i = 0; i < word.length; i++) {
        
        // Use conditional logic to check the value of each character. If it equals "a", increase count of letterA variable; if not, check "b"; and so on...
        if (word[i] === "a") {
            letterA++;
        } else if (word[i] === "b") {
            letterB++;
        } else if (word[i] === "c") {
            letterC++;
        } else if (word[i] === "d") {
            letterD++;
        } else if (word[i] === "e") {
            letterE++;
        } else if (word[i] === "f") {
            letterF++;
        } else if (word[i] === "g") {
            letterG++;
        } else if (word[i] === "h") {
            letterH++;
        } else if (word[i] === "i") {
            letterI++;
        } else if (word[i] === "j") {
            letterJ++;
        } else if (word[i] === "k") {
            letterK++;
        } else if (word[i] === "l") {
            letterL++;
        } else if (word[i] === "m") {
            letterM++;
        } else if (word[i] === "n") {
            letterN++;
        } else if (word[i] === "o") {
            letterO++;
        } else if (word[i] === "p") {
            letterP++;
        } else if (word[i] === "q") {
            letterQ++;
        } else if (word[i] === "r") {
            letterR++;
        } else if (word[i] === "s") {
            letterS++;
        } else if (word[i] === "t") {
            letterT++;
        } else if (word[i] === "u") {
            letterU++;
        } else if (word[i] === "v") {
            letterV++;
        } else if (word[i] === "w") {
            letterW++;
        } else if (word[i] === "x") {
            letterX++;
        } else if (word[i] === "y") {
            letterY++;
        } else {
            letterZ++;
        }

    }

    // We have now counted the instances of each letter of the alphabet within a given word/string, and stored their values in corresponding variables (letterA, letterB, etc.)

    let wordChars = [
        letterA,
        letterB,
        letterC,
        letterD,
        letterE,
        letterF,
        letterG,
        letterH,
        letterI,
        letterJ,
        letterK,
        letterL,
        letterM,
        letterN,
        letterO,
        letterP,
        letterQ,
        letterR,
        letterS,
        letterT,
        letterU,
        letterV,
        letterW,
        letterX,
        letterY,
        letterZ
    ];

    let freqChar = Math.max(...wordChars);

    letterC = "c";


    // I'm trying to get the letter value of the letter with the highest frequency
    // Perhaps rather than using an array, I could use an object where each item in the object contains two properties
        // 1. for the count value, e.g. 3
        // 2. for the letter value, e.g. "a"
    let freqCharLetter = freqChar;

    console.log(`The word you entered is: ${word}`);
    console.log(`This word has a total of ${word.length} characters.`);
    console.log(`The most frequently occurring character appears ${freqChar} times.`);
    console.log(`This character is: ?`);


    /*
    console.log(letterA);
    console.log(letterB);
    console.log(letterC);
    console.log(letterD);
    console.log(letterE);
    console.log(letterF);
    console.log(letterG);
    console.log(letterH);
    console.log(letterI);
    console.log(letterJ);
    console.log(letterK);
    console.log(letterL);
    console.log(letterM);
    console.log(letterN);
    console.log(letterO);
    console.log(letterP);
    console.log(letterQ);
    console.log(letterR);
    console.log(letterS);
    console.log(letterT);
    console.log(letterU);
    console.log(letterV);
    console.log(letterW);
    console.log(letterX);
    console.log(letterY);
    console.log(letterZ);
    */

} // End of function 'charCounter'

charCounter("aaabbccc");
