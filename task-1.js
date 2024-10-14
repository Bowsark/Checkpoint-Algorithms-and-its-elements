async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Delay of 1 second
      console.log(value);
    }
  }
  
  // Example usage:
  iterateWithAsyncAwait([1, 2, 3, 4, 5]);
  