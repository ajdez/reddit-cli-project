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

function chosenSubreddit() {
    return inquirer.question({
                type: "input",
                message: "Choose a subreddit",
                default: 'montreal'
            });
}


    module.exports = {
        pageListing: pageListing,
        chosenSubreddit: chosenSubreddit
    }
