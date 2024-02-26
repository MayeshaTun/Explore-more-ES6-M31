/*map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation  in an array and finally returns you the array*/

const numbers = [4, 5, 2, 8, 10];

// first option long://
function doubleIt(num) {
  // console.log("num now", num);
  return num * 2;
}
const result = numbers.map(doubleIt);
//console.log(result);

//second option short curt://
const double2 = (n) => n * 2;
const output = numbers.map(double2);
//console.log(output);

//third option more short :///
const output2 = numbers.map((n) => n * 2);

const doubled = [];
for (const num of numbers) {
  const double = num * 2;
  doubled.push(double);
}
console.log(doubled);
