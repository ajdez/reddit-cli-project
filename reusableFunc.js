var inquirer = require("inquirer-promise");


function pageListing(array) {
    return array.map(function(x) {
        return {
            username: x.data.author,
            url: x.data.url,
            votes: x.data.ups,
            title: x.data.title
        }
    })
}

function subredditOptions (array){
    return array.map(function(x){
        return {display_name : x.data.display_name};
        
    })
}

function listOfSubreddit(array){
    return inquirer.list("what would you look to see?", array )
}

function chosenSubreddit() {
    return inquirer.question({
                type: "input",
                message: "Choose a subreddit",
                default: 'montreal'
            });
}


    module.exports = {
        pageListing: pageListing,
        chosenSubreddit: chosenSubreddit,
        subredditOptions: subredditOptions,
        listOfSubreddit: listOfSubreddit
    }
