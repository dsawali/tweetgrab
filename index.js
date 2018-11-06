const express = require('express');
const app = express();
const port = 3000;
const twitterApi = require('./public/js/twitterApi.js');

require('dotenv').config();

let option = 'hashtag';

twitterApi.init();
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/public/index.html');
});

//Searching the tweets and showing it.
app.get('/search', (req,res) => {
    let searchData = req.query.searchData;
    //Get the id using the twitterApi and then send it using the res.send
    twitterApi.callAPI(searchData, option).then((data) => {
        console.log(data);
        if(data.statuses.length !== 0){
            res.send(data.statuses[0].id_str);
        } else {
            res.send("Sorry the tweet is not found.");
        }
    });
});

//Changing the option
app.get('/option', (req,res) => {
    option = req.query.optionData;
    res.send(option);
});

app.listen(port, () => {
    console.log('Listening on port ' + port);
});

