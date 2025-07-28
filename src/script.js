console.log("Welcome to marvel app !");

/**
 * Get characters from json file
 */

const getCharacters = () => {
  console.log("Fetching characters...");

  // API URL to fetch characters from
  const API_URL = "http://localhost:3000/data/characters.json";

  // Fetching characters from the API
  console.log(`Fetching from ${API_URL}`);
  return (
    fetch(API_URL)
      // Handle the response
      .then((response) => {
        console.log("Response received");
        return response.json();
      })
      // Handle the data
      .then((data) => {
        console.log("Characters fetched successfully");
        console.log(data);
      })
  );
};

// Call the function to get characters
getCharacters();
