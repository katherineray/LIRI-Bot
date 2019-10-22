require("dotenv").config();
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");

// Takes in all of the command line arguments
var inputString = process.argv;

// Parses the command line argument to capture the "operand"
var operand = inputString[2];
var userInput = inputString[3];
console.log(operand);
console.log(userInput);
// Conditionals Setup
if (operand == "movie-this") {
  //   insert movie-this logic api
  console.log("movie-this is working!");
  axios
    .get("http://www.omdbapi.com/?apikey=trilogy&t=" + userInput)
    .then(function(response) {
      // If the axios was successful...
      // Then log the body from the site
      console.log(response.data.Title);
      console.log(response.data.Year);
      console.log(response.data.movieInfo.imdbRating);
      //console.log(response.data.Ratings."Rotten Tomatoes");
      console.log(response.data.Country);
      console.log(response.data.Language);
      console.log(response.data.Plot);
      console.log(response.data.Actors);
      //   add  requirements
    });
} else if (operand == "concert-this") {
  //   insert concert-this logic api
  console.log("concert-this is working!");
} else if (operand == "spotify-this-song") {
  // insert spotify-this-song logic api
  console.log("spotify-this-song is working!");
} else if (operand == "do-what-it-says") {
  //
  console.log("do-what-it-says is working!");
}
