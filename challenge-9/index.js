// Create a function that will convert from Fahrenheit to Celsius //

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Example:
const fahrenheit = 77;
const celsius = fahrenheitToCelsius(fahrenheit);
console.log(`${fahrenheit}°F is equal to ${celsius}°C`);