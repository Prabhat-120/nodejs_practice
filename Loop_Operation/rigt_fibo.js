// Function to generate and print the pattern
function generateFibonacciPattern(rows) {
    let a = 1;
    let b = 1;
  
    for (let i = 0; i < rows; i++) {
      let row = '';
  
      for (let j = 0; j <= i; j++) {
        row += a + ' ';
        const temp = a + b;
        a = b;
        b = temp;
      }
  
      console.log(row);
    }
  }
  
  // Specify the number of rows you want in the pattern
  const numberOfRows = 4; // Change this to the desired number of rows
  
  // Generate and print the Fibonacci pattern
  generateFibonacciPattern(numberOfRows);
  