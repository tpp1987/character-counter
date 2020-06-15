let alphabet = []
let wordCharacterCount = []
let freqCharNum = 0
let freqChar = []
let userWord = ""
let numbers = [0,1,2,3,4,5,6,7,8,9]

const charCounter = function (word) {

    alphabet = [
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

    alphabet.forEach(function (item) {
        for (let i = 0; i < word.length; i++) {
            if (word.toLowerCase()[i] === item.letter) {
                item.count = item.count + 1
            }
        }
        wordCharacterCount.push(item.count)
    })
    
    freqCharNum = Math.max(...wordCharacterCount)

    alphabet.forEach(function (item) {
        if (freqCharNum === item.count) {
            freqChar.push(item.letter.toUpperCase())
        }
    })

    if (word.includes(" ")) {
        const chosenWordElement = document.createElement("p")
        chosenWordElement.textContent = `The words you entered are: '${word}'`
        document.querySelector("#results").appendChild(chosenWordElement)

        const totalCharElement = document.createElement("p")
        totalCharElement.textContent = `These words have a total of ${word.length} characters, including spaces`
        document.querySelector("#results").appendChild(totalCharElement)
    } else {
        const chosenWordElement = document.createElement("p")
        chosenWordElement.textContent = `The word you entered is: '${word}'`
        document.querySelector("#results").appendChild(chosenWordElement)

        const totalCharElement = document.createElement("p")
        totalCharElement.textContent = `This word has a total of ${word.length} characters`
        document.querySelector("#results").appendChild(totalCharElement)
    }
    
    if (freqCharNum === 1) {
        const freqCharElement = document.createElement("p")
        freqCharElement.textContent = `All letters appear only once—no single letter appears most frequently`
        document.querySelector("#results").appendChild(freqCharElement)
    } else if (freqChar.length === 1) {
        const freqCharElement = document.createElement("p")
        freqCharElement.textContent = `The most frequently occurring letter is '${freqChar}', which appears ${freqCharNum} times`
        document.querySelector("#results").appendChild(freqCharElement)
    } else {
        const freqCharElement = document.createElement("p")
        freqCharElement.textContent = `The most frequently occurring letters are '${freqChar}', which appear ${freqCharNum} times each`
        document.querySelector("#results").appendChild(freqCharElement)
    }

    const finalMessage = document.createElement("p")
    finalMessage.textContent = `Now, wasn't that fun? I bet you'd love another turn...`
    document.querySelector("#results").appendChild(finalMessage)

    alphabet = []
    wordCharacterCount = []
    freqCharNum = 0
    freqChar = []
    userWord = ""
}

document.querySelector("#main-input").addEventListener("change", function (e) {
    userWord = e.target.value
})

document.querySelector("#main-button").addEventListener("click", function (e) {
    document.querySelector("#results").innerHTML = ""
    if (userWord.includes(0) || userWord.includes(1) || userWord.includes(2) || userWord.includes(3) || userWord.includes(4) || userWord.includes(5) || userWord.includes(6) || userWord.includes(7) || userWord.includes(8) || userWord.includes(9)) {
        const newParagraph = document.createElement("p")
        newParagraph.textContent = `Sorry, no numbers allowed! Please only use letters!`
        document.querySelector("#results").appendChild(newParagraph)
    } else if (userWord === "") {
        const newParagraph = document.createElement("p")
        newParagraph.textContent = `Come on, at least enter a word...`
        document.querySelector("#results").appendChild(newParagraph)
    } else {
        charCounter(userWord)
    }
})