// Creata a new array with 7 elements, all of which are initially set to 'Hello'
let helloArray = Array(7).fill('Hello');
console.log(helloArray); 

/* Task 2: Update the Array 
1. Now, fill only part of the array with a different string or number using 
.fill. For example, you might fill it with “Hi” or 2 or 5.  You will need to 
decide how many slots in the array to change. 
2. Log your new changes. 
*/

let helloArray2 = Array(7).fill('Hi', 0, 4,);
console.log(helloArray2);

/* Task 3: Populate the Array with a for Loop 
1. Create a new array with a size of five. 
2. Using a for Loop, assign each slot a numeric value that is index * 10 
3. Log your results to confirm the array contains the correct values: 0, 10, 20, 
30, 40. */

let countByTen = Array(5);
for (let i = 0; i < countByTen.length; i++) {
    countByTen[i] = i * 10;
}
console.log(countByTen);