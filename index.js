// If the blood composition of the person is a subsequence of the virus composition V, then the person is  identified as POSITIVE otherwise NEGATIVE.
// 1. Scientists gave virus (V) of composition string (coronavirus). 
// 2. We have to take N number of samples (example input is 4)
// 3. The blood samples strings are subsequence or not, ("abcde" is subsequence to "coronavirus" or not). means this sample "abcde" is "NEGATIVE". 
// Constraints (edge case)
// 1<= N <=10
// 1<= |B|<= |V|<= 10^5

// console.log("hello");

const prompt = require('prompt-sync')();

let virusSequence = prompt('Enter the Virus sequence');
console.log(`Virus sequence is : ${virusSequence}`);

const N = prompt('Enter the number of people');
console.log(`number of people are : ${N}`);

let arr = [];
for (let i = 0; i < N; i++) {
	arr[i] = prompt('Enter the blood sample sequence ' + (i + 1)+' ');
}
console.log(arr);

// length of the array "arr"
const lengthOfArr = arr.length;