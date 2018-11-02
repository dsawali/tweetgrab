const express = require('express');
const app = express();
const port = 3000;
const twitterApi = require('./public/js/twitterApi.js');

app.use(express.static('public'));

app.use('/', (req,res) => {
    res.sendFile(__dirname + '/public/index.html');
    twitterApi.init();
    twitterApi.getJSON('twice mina the best');
});

app.listen(port, () => {
    console.log('Listening on port ' + port);
})

