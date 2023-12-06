/*
// Create a fetch request to https://api.chucknorris.io/jokes/random and console.log() the data that is returned.

const API = "https://api.chucknorris.io/jokes/random";

const state = {
    jokes: "",
};

// Async function to call data from API and log to console results.
async randomJoke = () => {
    const results = await fetch(API);
}*/


function disemvowel(string) {
  // your code here...
    let vowel = ["a", "e", "i", "o", "u"];
    // for loop to iterate string
    for (let i = 0; i < string.length; i++) {
        let letter = [];
        //use if statement to evaluate letter and remove if vowel
        if (!vowel.includes(string[i])) {
            letter.push(string[i])
        }
    }
    // use array method to remove vowels from string

    // return remaining letters
    return 
}


//Uncomment the lines below to test your function:

// console.log(disemvowel('Fullstack')); // => 'Fllstck'
// console.log(disemvowel('BANANA')); // => 'BNN'
// console.log(disemvowel('hello world')); // => 'hll wrld'