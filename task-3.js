async function concurrentRequests() {
    const apiCall1 = fakeApiCall(); // First API call
    const apiCall2 = fakeApiCall(); // Second API call
  
    try {
      const [result1, result2] = await Promise.all([apiCall1, apiCall2]);
      console.log("Results from both calls:", result1, result2);
    } catch (error) {
      console.log("Error with one or both requests:", error);
    }
  }
  
  // Example usage:
  concurrentRequests();
  