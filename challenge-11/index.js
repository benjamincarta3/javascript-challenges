// Calculate the average of the numbers in an array of numbers //

function averageArray(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
}

// Example
console.log(averageArray([10, 20, 30, 40])); // 25