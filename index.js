const express = require('express');
const app = express();
const port = 3000;
const twitterApi = require('./twitterApi.js');

require('dotenv').config();

let option = 'hashtag';
let ids = [];

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
        if(data.statuses.length !== 0){
            let dataID = data.statuses[0].id;
            console.log(data.search_metadata.query);
            console.log(dataID);
            if(!ids.includes(dataID)){
                ids.push(dataID)
                res.send(data.statuses[0].id_str);
            } else {
                res.send("duplicate ID");
            }
        } else {
            res.send("Sorry the tweet is not found.");
        }
    }).catch((er) => {
        if(er) throw er;
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

