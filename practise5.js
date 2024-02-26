/*You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. 
Now return/get all the elements which are divisible by 10 using array.filter() method.*/

const array = [33, 50, 79, 78, 90, 101, 30];
const elements = array.filter((a) => a % 10 === 0);
console.log(elements);

/*Now do the same task of question 2. But do this using array.find
method. Then compare the output of question 2 & question 3*/

const divisibleBy10 = array.find((a) => a % 10 === 0);
console.log(divisibleBy10);
