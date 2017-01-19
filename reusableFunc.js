function homePageListing(array) {
    return array.map(function(x) {
        return {
            username: x.data.author,
            url: x.data.url,
            votes: x.data.ups,
            title: x.data.title
        }
    })
}



module.exports = {
    homePageListing: homePageListing
}
