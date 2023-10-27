function reverseString(inputString){
    return inputString.split('').reverse().join('')
}
// example 
let originalString = 'tundeednut';
let reversedstring = reverseString(originalString);
console.log(reversedstring);