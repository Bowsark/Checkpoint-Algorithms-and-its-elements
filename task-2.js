async function awaitCall() {
    try {
      const data = await fakeApiCall(); // Simulating an API call
      console.log("Fetched data:", data);
    } catch (error) {
      console.log("Error fetching data. Please try again later.");
    }
  }
  
  async function fakeApiCall() {
    // Simulate a 50% chance of failure
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.5 ? resolve("Success!") : reject("Failed to fetch");
      }, 1000);
    });
  }
  
  // Example usage:
  awaitCall();
  