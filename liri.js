// How do i make if so you have two type in a certin arg to pass 
require('dotenv').config()
var Twitter = require('twitter')
var Spotify = require('node-spotify-api');
// var nodeArgs = process.argv; ??
// Keys for all API's
var config = require("./keys")
// Twitter call and response tweets
var myArg = process.argv[2];
console.log(myArg);
console.log("");
var client = new Twitter(config.twitter);
var params = { screen_name: 'jakearagland' };
client.get('statuses/user_timeline', params, function (error, tweets, response) {
  if (!error) {
    console.log(tweets);
  } else {
    console.log(error);
  }
});
// OMB call and response
var movieName = process.argv[2];
request("http://www.omdbapi.com/?t=s&y=&plot=short&apikey=", function (error, response, body) {  // fix so i can use a key for the .env
  if (!error && response.statusCode === 200) {
// All the log to the API for movie.
// Still have question here for searching all movie
    console.log("Movie Title: " + JSON.parse(body).Title);
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("");
    console.log("");
    console.log("");
    console.log("-------------------------------------------------------------------");

  }
});
//Cant get this to work
// Spoifty call to API and log
var track = process.argv[2];
var Spotify = require('node-spotify-api');
var sclient = new Spotify(config);
  
Spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
console.log(data); 
console.log("");
console.log("");
console.log("");
console.log("-------------------------------------------------------------------");
});









//example

//console.log(someVariable) // undefined

// function Car(make) {
//     this.make = config.key
// }

/*var tweet = new Car('honda')
var tweet2 = new Car('toyota')
console.log(tweet.make)
console.log(tweet2.make)*/