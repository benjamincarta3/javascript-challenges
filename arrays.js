//Create an array called fruits containing:apple, banana, mango, orange.//

const fruits = ["apple", "banana", "mango", "orange"];

// changing an element //

let animals = ["cat", "dog", "rabbit"];
animals[0] = [lion];
console.log(animals); // ["lion", "dog", "rabbit"]

// Adding an element to the end of an array //
let colors = ["red", "green", "blue"];
colors.push("yellow");
console.log(colors); // ["red", "green", "blue", "yellow"]

// Removing the last element of an array //
let numbers = [1, 2, 3, 4, 5];
numbers.pop();
console.log(numbers); // [1, 2, 3, 4]

// Finding the length of an array //
let cars = ["Toyota", "Honda", "Ford"];
console.log(cars.length); // 3

// Create a function that receives an array of numbers and returns an array containing only the positive numbers //
function getPositiveNumbers(numbers) {
  let positives = [];
}

    for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positives.push(numbers[i]);
    }}

    return positives;

    //Passing an array to a new Set//
    const letters = new Set(["a", "b", "c", "d", "e", "f"]);

    //array//
    const Array = [1, 2, 3, 4, 5];

    //Set//
    const mySet = new Set(Array);
    console.log(mySet); // Set(5) {1, 2, 3, 4, 5}

    mySet.delete(1);
    console.log(mySet); // Set(4) {2, 3, 4, 5}  

    //Function//
    function greet() {
      console.log("Hello, welcome to JavaScript!");
    }
    greet();// Output: Hello, welcome to JavaScript!

    function greetUser(name) {
      console.log(`Hello, ${name}!`);
    }
    greetUser("John");// Output: Hello, John!

    function add(a, b) {
      return a + b;
    }
    console.log(add(5, 3)); // Output: 8

//objects//
let student = {
name: "Kojo",
age: 21,
course: "Computer Science",
};

student.place = "Accra";
// creating a person object with the function greet that print Hello my name is John//

const person = {
  greet: function(name) {
    console.log(`Hello, my name is ${name}!`);
  }
};
person.greet("John"); // Output: Hello, my name is John!