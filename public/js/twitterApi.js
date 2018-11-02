//This file should not be accessible from the website, since this file has confidential information.

const self = module.exports = {
    client: '',
    init: () => {
        const Twitter = require('twitter');
        
        client = new Twitter({
            consumer_key: '',
            consumer_secret: '',
            access_token_key: '',
            access_token_secret: ''
        });
    },

    getJSON: (query) => {
        self.callAPI(self.processAPI, query);
    },

    callAPI: (callback, query) => {
        client.get('search/tweets', { q: query, result_type: 'recent', count: 5 }, function (error, tweets, response) {
            if (error) throw error;
            callback(tweets);
        });
    },

    processAPI: (response) => {
        console.log(response);
    }
}
