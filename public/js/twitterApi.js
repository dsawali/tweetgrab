//This file should not be accessible from the website, since this file has confidential information.
module.exports = {
    client: '',
    //Authorizing the twitter 
    init: () => {
        const Twitter = require('twitter');

        client = new Twitter({
            consumer_key: '',
            consumer_secret: '',
            access_token_key: '',
            access_token_secret: ''
        });
    },

    //Searching the tweet
    callAPI: (query, option) => {
        query = (option === 'hashtag') ? '#' + query : query;
        query = (option === 'user') ? '@' + query : query;

        return client.get('search/tweets',
            { q: query, result_type: 'recent', count: 1 });
    }
}