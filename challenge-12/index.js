// Create a function that receives an array of numbers and returns an array containing only the positive numbers //

function getPositiveNumbers(numbers) {
  let positives = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positives.push(numbers[i]);
    }
  }

  return positives;
}

// Example
console.log(getPositiveNumbers([-3, 5, -1, 8, 0, 10])); // [5, 8, 10]