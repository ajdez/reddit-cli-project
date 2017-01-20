var inquirer = require("inquirer");
var bluebird = require("bluebird");
var request = require("request");
var imageToAscii = bluebird.promisify(require("image-to-ascii"))


function pageListing(array) {
    return array.map(function(x) {
        return {
            username: x.data.author,
            url: x.data.url,
            votes: x.data.ups,
            title: x.data.title,
            permalink: x.data.permalink
        }
    })
}

function subredditOptions(array) {
    return array.map(function(x) {
        return {
            name: x.data.display_name,
            value: x.data.display_name.toUpperCase()
        };
    })
}

function listOfSubreddit(array) {
    return inquirer.list("what would you look to see?", array)
}

function chosenSubreddit() {
    return inquirer.prompt({
            type: "input",
            name: "subreddit",
            message: "Choose a subreddit",
            default: 'montreal'
        })
        .then(function(answers) {
            return answers.subreddit;
        })
}

function postListing(array) {
    return inquirer.prompt({
        type: "list",
        name: "postListing",
        message: "Pick a post!",
        choices: array
    })
}

function postList(array) {
    return array.map(function(answer) {
        return {
            name: answer.title,
            value: answer
        }
    })
}

function loadImage(url) {
    return imageToAscii(url);
}

function getList(list) {
    return inquirer.prompt({
        type: 'list',
        name: 'subredditOption',
        message: 'choose a subredddit',
        choices: list
    })
}

function getURL(chosenItem) {
    console.log("HIIIIIII" , chosenItem);
        return request(chosenItem.postListing.url)
        .then(function(url) {
            console.log("///////////URL///////", url);
            var urlJSON = JSON.parse(url);
            return urlJSON;
        })
}

  
  function retrieveComments(array){
      console.log(array);
    //array.map(function)
    
  }


module.exports = {
    pageListing: pageListing,
    chosenSubreddit: chosenSubreddit,
    subredditOptions: subredditOptions,
    listOfSubreddit: listOfSubreddit,
    postListing: postListing,
    postList: postList,
    loadImage: loadImage,
    getList, getList,
    getURL: getURL,
    retrieveComments: retrieveComments

}
