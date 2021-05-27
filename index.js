// If the blood composition of the person is a subsequence of the virus composition V, then the person is  identified as POSITIVE otherwise NEGATIVE.
// 1. Scientists gave virus (V) of composition string (coronavirus).
// 2. We have to take N number of samples (example input is 4)
// 3. The blood samples strings are subsequence or not, ("abcde" is subsequence to "coronavirus" or not). means this sample "abcde" is "NEGATIVE".
// Constraints (edge case)
// 1<= N <=10
// 1<= |B|<= |V|<= 10^5

// console.log("hello");

const prompt = require('prompt-sync')();

let virusSequence = prompt('Enter the Virus sequence : ');
virusSequence = virusSequence.toLowerCase(); //
console.log(`\n Virus sequence is : ${virusSequence}`);

const lengthOfVirusSequence = virusSequence.length;
// console.log(lengthOfVirusSequence);

const N = prompt('Enter the number of people : ');
console.log(`\n number of people are : ${N}`);

let bloodSamples = [];
for (let i = 0; i < N; i++) {
	bloodSamples[i] = prompt('Enter the blood sample sequence ' + (i + 1) + ' ');
    bloodSamples[i] = bloodSamples[i].toLowerCase();
}
 console.log(bloodSamples);

// calculate the length of the blood samples array
const lengthOfBloodSamples = bloodSamples.length;



// console.log(lengthOfBloodSamples);
let str;
for (i = 0; i < lengthOfBloodSamples; i++) {
  str = bloodSamples[i];
  const singleBloodSampleLength = str.length;
//   console.log(singleBloodSampleLength);
// testReport function call
  let result = testReport(
		str,
		virusSequence,
		singleBloodSampleLength,
		lengthOfVirusSequence
	);
    // recieve boolean value
    if(result) {
        console.log('POSITIVE');
    } else{
        console.log('NEGATIVE');
    }
}

function testReport (p, q, s, t) {
    let j = 0;
    for (let i = 0; i < t && j < s; i++) {
        if (p[j] == q[i]) { // character of p present in q or not
            j++;
        }
    }
    return j == s; //return boolean value
}