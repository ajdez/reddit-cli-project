var reddit = require('./reddit');
var inquirer = require("inquirer");
var reusableFunc = require("./reusableFunc")
var bluebird = require("bluebird");
var imageToAscii = bluebird.promisify(require("image-to-ascii"))
var request = require("request-promise");
var wordWrap = require("word-wrap")



function initialMenu() {
    var menuChoices = [{
            name: 'Show homepage',
            value: 'HOMEPAGE'
        }, {
            name: 'Show subreddit',
            value: 'SUBREDDIT'
        }, {
            name: 'Show sorted subreddit',
            value: 'SORTEDSUBREDDITS'
        }, {
            name: 'List subreddits',
            value: 'SUBREDDITS'
        }, {
            name: 'Show sorted homepage',
            value: 'SORTEDHOMEPAGE'
        }
    ];


    inquirer.prompt({
            type: 'list',
            name: 'menu',
            message: 'what will you like to be displayed',
            choices: menuChoices
        }).then(function(choice) {
            if (choice.menu === 'HOMEPAGE') {
                return reddit.getHomepage()
                    .then(reusableFunc.pageListing)
            }
            else if (choice.menu === 'SUBREDDIT') {
                return reusableFunc.chosenSubreddit()
                .then(reddit.getSubreddit)
                .then(reusableFunc.pageListing)
                .then(reusableFunc.postList)
                .then(reusableFunc.postListing)
                .then(function(result){
                    var url = "https://www.reddit.com" + result.postListing.permalink + ".json";
                    return  request(url)
                })
                .then(function(x){
                    var urlJSON = JSON.parse(x);
                    return urlJSON;
                })
                .then(reusableFunc.formatArray)
                .then(reusableFunc.retrieveComments)
               
                
                
                
            }
            else if (choice.menu === 'SORTEDSUBREDDITS') {
                return reddit.getSortedSubreddit()
            }
            else if (choice.menu === 'SUBREDDITS') {
                return reddit.getSubreddits()
                .then(reusableFunc.subredditOptions)
                .then(reusableFunc.getList)
                .then(x=> x.subredditOption)
                .then(reddit.getSubreddit)
                .then(reusableFunc.pageListing)
                .then(reusableFunc.postList)
                .then(reusableFunc.postListing)
                .then(function(choice){
                    var url = choice.postListing.url;
                    if (url.endsWith('jpg') || url.endsWith('gif') || url.endsWith('png')){
                        return reusableFunc.loadImage(url);
                    }
                    else{
                        return choice;
                    }
        
                    })
            }
            else if (choice.menu === 'SORTEDHOMEPAGE') {
                return reddit.getSortedHomepage;
            }
        })
        .then(function(result) {
            console.log(result);
        })
        .then(initialMenu)
        .catch(function(err) {
            console.log("Error : " + err)
        })
}

initialMenu();
