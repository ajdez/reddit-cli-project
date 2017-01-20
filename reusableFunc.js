var inquirer = require("inquirer");


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
        return {name : x.data.display_name,
                value: x.data.display_name.toUpperCase()
        };
    })
}

function listOfSubreddit(array){
    return inquirer.list("what would you look to see?", array )
}

function chosenSubreddit() {
    return inquirer.prompt({
                type: "input",
                name: "subreddit",
                message: "Choose a subreddit",
                default: 'montreal'
            })
            .then(function(answers){
                return answers.subreddit;
            })
}


    module.exports = {
        pageListing: pageListing,
        chosenSubreddit: chosenSubreddit,
        subredditOptions: subredditOptions,
        listOfSubreddit: listOfSubreddit
    }
