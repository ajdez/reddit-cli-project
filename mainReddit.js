var reddit = require('./reddit');
var inquirer = require("inquirer-promise");
var reusableFunc = require("./reusableFunc")



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
                .then(reusableFunc.homePageListing)
            }
        })
        .then(function(result) {
            console.log(result);
            initialMenu();
        })


    //votes: ups, url: url , username: author, title:title
    /*
    }
    else if (choice.menu === 'SUBREDDIT') {
        return reddit.getSubreddit()
    }
    else if (choice.menu === 'SORTEDSUBREDDITS') {
        return reddit.getSortedSubreddit
    }
    else if (choice.menu === 'SUBREDDITS') {
        return reddit.getSubreddits;
    }
    else if (choice.menu === 'SORTEDHOMEPAGE') {
        return reddit.getSortedHomepage;
    }
    })
    .catch(function(err) {
        console.log("Error : " + err)
    })
    */
}


initialMenu();