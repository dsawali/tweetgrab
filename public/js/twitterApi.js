//This file should not be accessible from the website, since this file has confidential information.

const self = module.exports = {
    client: '',
    init: () => {
        const Twitter = require('twitter');
        
        client = new Twitter({
            consumer_key: 'RuzO44ditoOZvItSUmvhuA1ih',
            consumer_secret: 'QtztiYRh1wo6pf7pC7nxhyTBttkyg6oeD9iGAaQa827peySUAd',
            access_token_key: '1056332584064442368-F9hifzPSVZFDgajxRiyaMQyaYKcHGy',
            access_token_secret: 'kzX3tZ4H7BBjq8UQg4jeG4JInFJURcSqXNSuv56QIMpjy'
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
