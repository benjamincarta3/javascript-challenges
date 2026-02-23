// Print all the multiplication tables with numbers from 1 to 10 //

// Using for loop //

for (let num = 1; num <= 10; num++) {
    console.log("Multiplication Table for " + num);

    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
    console.log("");  // Added an empty line after each table for better readability
}