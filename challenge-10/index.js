// Calculate the sum of numbers in an array of numbers //

function sumArray(numbers) {
  let sum = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  
  return sum;
}

// Example
console.log(sumArray([1, 2, 3, 4, 5])); // 15