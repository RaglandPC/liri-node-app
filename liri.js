
require('dotenv').config()
var Twitter = require('twitter')
// var Spotify = require('node-spotify-api');
// var omdb = require('omdb');
var config = require("./keys")
console.log(config)
var myArg = process.argv[2];
console.log(myArg);
// Twitter call and response tweets
var client = new Twitter(config.twitter);
var params = {screen_name: 'jakearagland'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  } else {
    console.log(error);
  }
});







//console.log(someVariable) // undefined

// function Car(make) {
//     this.make = config.key
// }

/*var tweet = new Car('honda')
var tweet2 = new Car('toyota')
console.log(tweet.make)
console.log(tweet2.make)*/