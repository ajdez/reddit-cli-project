var reddit = require('./reddit');
var inquirer = require("inquirer-promise");

var menuChoices = [
  {name: 'Show homepage', value: 'HOMEPAGE'},
  {name: 'Show subreddit', value: 'SUBREDDIT'},
  {name: 'Show sorted subreddit', value: 'SORTEDSUBREDDITS'},
  {name: 'List subreddits', value: 'SUBREDDITS'},
  {name: 'Show sorted homepage', value : 'SORTEDHOMEPAGE'}
  
];


inquirer.prompt({
    type: 'list',
    name: 'main menu',
    message: 'what will you like to be displayed',
    choices: menuChoices
}).then(function(choice){
    if (choice === 'HOMEPAGE'){
        return reddit.getHomepage;
    }
    else if (choice === 'SUBREDDIT'){
        return reddit.getSubreddit;
    }
    else if (choice === 'SORTEDSUBREDDITS'){
        return reddit.getSortedSubreddit
    }
    else if (choice === 'SUBREDDITS'){
        return reddit.getSubreddits;
    }
    else if (choice === 'SORTEDHOMEPAGE'){
        return reddit.getSortedHomepage;
    }
})
