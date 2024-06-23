// several ways to declare and initialize an array:
var arr = [1,2,3,4,6,4];
var arr1= new Array(1,2,3,4,5,2,1);
var arr2 = Array.of(1,3,5,2,4);
var arr3=Array.from([1,3,5,4,3,2]);
var arr4 = arr.concat(10,20,40)

// Accessing Array Elements
// using square brackets [] and specifying the index (0-based index):
console.log(arr[2])   // Output: 3
console.log(arr[arr.length-2]) // Output: 6

// length: Returns the number of elements in the array.
const len = arr.length
console.log(len) // Output: 6

// Checking Array Type
console.log(Array.isArray(arr)) //output: true


// Adding Elements
arr.push(100)
console.log(arr) //output: [1, 2,   3, 4, 6, 4, 100]
arr.unshift(200)
console.log(arr) //output: [200,1, 2,   3, 4, 6, 4, 100]

// Removing Elements

arr.pop(100)
console.log(arr) //output: [200,1, 2,   3, 4, 6, 4]
arr.shift(200)
console.log(arr) //output: [1, 2,   3, 4, 6, 4]

// Using splice()

arr.splice(0,2)
console.log(arr) //output: [3, 4, 6, 4]
console.log(arr.splice(0,2))  //output: [3, 4]

// Iterating Over Arrays

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element) //output: 6,4
    
}

arr.forEach(function(element){
    console.log(element) //output: 6,4
})

// Array Methods

var arr0=[10,20,30,40,50,20]
var newArray= arr.concat(arr0)
console.log(newArray) //output: [6,4,10,20,30,40,50]

var sliceArray=newArray.slice(0,3)
console.log(sliceArray) //output: [6,4,10]

console.log(newArray.indexOf(20)) //output:3

console.log(newArray.lastIndexOf(20)) //output:7

console.log(newArray.includes(20)) //output: true

console.log(newArray.sort()) //output: sort the array

console.log(newArray.reverse()) //output: reverse the array


// find operation

// Returns the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.
 var arr10 = [10,20,50,30,40,1,2,3];
 const findItem= arr10.find(function(ele){
   return ele<30
 })

 console.log(findItem) //output: 10

//  filter

const filterItem= arr10.filter(function(ele){
    return ele<30
})
console.log(filterItem) //output: [ 10, 20, 1, 2, 3 ]

// Updating Elements

arr10[2]=100
console.log(arr10) //output: [ 10, 20, 100, 30,40,  1,   2,  3]

// join

console.log(arr10.join(', ')) //output: 10, 20, 100, 30, 40, 1, 2, 3

// map

const mapArray= arr10.map(function(ele){
    return ele*2
})
console.log(mapArray) //output: [20, 40, 200, 60, 80, 3, 4, 6]

// reduce()
// Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const reduceArray = arr10.reduce(function(sum,currentValue){
    return sum+currentValue;
},0)
console.log(reduceArray) //output: 206

// every()
// Tests whether all elements in the array pass the test implemented by the provided function. Returns true or false.

let allAbove30 = arr.every(function(element) {
    return element > 30;
  });
  
  console.log(allAbove30); // Output: false

//   Spread Operator (...)
//   Used for creating copies of arrays or merging arrays. 

const SpreadOperator = [...arr10 ,200,400]
console.log(SpreadOperator) //output: [ 10, 20, 100, 30,40,  1,   2,  3,200,400]

// fill()
// Changes all elements in an array to a static value.
 
const fillArray = arr10.fill(0)
console.log(fillArray) //output: [ 0, 0, 0, 0,0, 0,0]

// copyWithin()
// Shallow copies part of an array to another location in the same array and returns it without modifying its length.

let arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3); // Copies elements starting from index 3 to index 0
console.log(arr); // Output: [4, 5, 3, 4, 5]
