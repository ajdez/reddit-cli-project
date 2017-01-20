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
                    .then(reusableFunc.pageListing)
            }
            else if (choice.menu === 'SUBREDDIT') {
                return reusableFunc.chosenSubreddit()
                .then(reddit.getSubreddit)
                .then(reusableFunc.pageListing);
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
        .then(function(result) {
            console.log(result);
            initialMenu();
        })
        .catch(function(err) {
            console.log("Error : " + err)
        })

}


initialMenu();
