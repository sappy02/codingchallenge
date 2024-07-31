// Find the Largest Number
// Description: Write a function findLargest that takes three numbers as arguments and returns the largest of the three.

// function findLargest(a, b, c) {
//     return Math.max(a, b, c);
// }

// console.log(findLargest(5, 10, 3)); // Output: 10
// console.log(findLargest(8, 2, 6)); // Output: 8

// // Reverse Words in a Sentence
// // Description: Write a function reverseWords that takes a string as an argument and returns a new string where the order of the words in the sentence are reversed, but the words themselves aren't.
// function reverseWords(sentence) {
//     let words = sentence.split(' '); // Split the sentence into an array of words
//     words = words.reverse(); // Reverse the array of words
//     return words.join(' '); // Join the reversed array back into a string
// }

// console.log(reverseWords("Hello world!")); // Output: "world! Hello"
// console.log(reverseWords("The quick brown fox")); // Output: "fox brown quick The"
// console.log(reverseWords("JavaScript is fun")); // Output: "fun is JavaScript"

// Find the Longest Word
// Description: Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// function findLongestWord(words) {
//      return words.reduce((longest, current) => {
//         return current.length > longest.length ? current : longest;
//     });
// }

// console.log(findLongestWord(["apple", "banana", "cherry", "date"])); // Output: "banana"
// console.log(findLongestWord(["dog", "elephant", "cat"])); // Output: "elephant"
// console.log(findLongestWord(["red", "blue", "green"])); // Output: "green"

// Count Occurrences of Words in a Sentence
// Description: Write a function countWords that takes a string sentence as an argument and returns an object where each key is a word in the sentence and the corresponding value is the number of times that word appears in the sentence.
function countWords(sentence) {
    let words = sentence.split(' '); // Split the sentence into an array of words
    return words.reduce((counts, current) => {
        counts[current] = (counts[current] || 0) + 1; // If the current word is already in the counts object, increment its value. Otherwise, set its value to 1.
        return counts;
    }, {});
}

console.log(countWords("hello world hello")); 
// Output: { hello: 2, world: 1 }

console.log(countWords("this is a test this is only a test")); 
// Output: { this: 2, is: 2, a: 2, test: 2, only: 1 }

function countWords(sentence) {
    let words = sentence.split(' '); // Split the sentence into an array of words
    return words.reduce((counts, current) => {
        counts[current] = counts[current] || 0; // If the current word is already in the counts object, use its value. Otherwise, set its value to 0.
        counts[current]++; // Increment the value of the current word
        return counts;
    }, {});
}

console.log(countWords("hello world hello")); 
// Output: { hello: 2, world: 1 }

console.log(countWords("this is a test this is only a test")); 
// Output: { this: 2, is: 2, a: 2, test: 2, only: 1 }