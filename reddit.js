var request = require('request-promise');
var prompt = require('prompt-promise')

/*
This function should "return" the default homepage posts as an array of objects
*/
function getHomepage() {
  // Load reddit.com/.json and call back with the array of posts
  return request("https://www.reddit.com/.json")
    .then(function(redditHome) {
      var redditHomeData = JSON.parse(redditHome);
      return redditHomeData.data.children;
    })
}




/*
This function should "return" the default homepage posts as an array of objects.
In contrast to the `getHomepage` function, this one accepts a `sortingMethod` parameter.
*/
function getSortedHomepage(sorthingMethod) {
  // Load reddit.com/{sortingMethod}.json and call back with the array of posts
  // Check if the sorting method is valid based on the various Reddit sorting methods
  return request("reddit.com/" + sorthingMethod + ".json")
    .then(function(urlSorted) {
      var urlData = JSON.parse(urlSorted);
      return urlData.data.children;
    })
}

  /*
  This function should "return" the posts on the front page of a subreddit as an array of objects.
  */
  function getSubreddit(subreddit) {
    // Load reddit.com/r/{subreddit}.json and call back with the array of 
    return request("reddit.com/r/" + subreddit + ".json")
      .then(function(urlSubreddit) {
        var subData = JSON.parse(urlSubreddit);
        return subData.data.children;
      })
  }



  /*
  This function should "return" the posts on the front page of a subreddit as an array of objects.
  In contrast to the `getSubreddit` function, this one accepts a `sortingMethod` parameter.
  */
  function getSortedSubreddit(subreddit, sortingMethod) {
    // Load reddit.com/r/{subreddit}/{sortingMethod}.json and call back with the array of posts
    // Check if the sorting method is valid based on the various Reddit sorting methods
    return request("reddit.com/r/" + subreddit + "/" + sortingMethod + ".json")
      .then(function(url) {
        var subSortData = JSON.parse(url);
        return subSortData.data.children;
      })
  }

  /*
  This function should "return" all the popular subreddits
  */

  function getSubreddits() {
    // Load reddit.com/subreddits.json and call back with an array of subreddits
    return request("reddit.com/subreddits.json")
      .then(function(url) {
        var subData = JSON.parse(url);
        return subData.data.children;
      })
  }

  // Export the API
  module.exports = {
    getSubreddit : getSubreddit, 
    getSortedSubreddit : getSortedSubreddit,
    getSubreddit : getSubreddit,
    getSortedHomepage : getSortedHomepage,
    getHomepage: getHomepage
  };
