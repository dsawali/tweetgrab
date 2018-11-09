$(document).ready(() => {
    //To use twitter embedded widgets
    window.twttr = (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
            t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);

        t._e = [];
        t.ready = function (f) {
            t._e.push(f);
        };

        return t;
    }(document, "script", "twitter-wjs"));

    // Stores value of input box in a variable
    $('#search-box').change(() => {
        let searchText = $('#search-box').val();
        let searchData = { 'searchData': searchText };
        $.ajax({
            type: 'GET',
            url: '/search',
            data: searchData,
            success: (id) => {
                console.log(id);
                //Creating the twitter embedded tweet
                const numberRegex = /^[0-9]*$/;
                //Checking whether the id is a valid id or not (all number)
                if (id.match(numberRegex)) {
                    createTweet(id);
                } else {
                    alert(id);
                }
            }
        });
        console.log(searchData);
    });

    //Stores value of dropdown menu in a variable
    $('#search-context').change(() => {
        let optionText = $('#search-context').val();
        let optionData = { 'optionData': optionText };
        $.ajax({
            type: 'GET',
            url: '/option',
            data: optionData,
            success: () => {
                $('#search-box').val('')
            }
        });
        console.log(optionData);
    });
});

function createTweet(id) {
    const wrapperClass = '.tweet-wrapper';
    let containerId = 'tweet-' + ($('.tweet-container').length);
    let tweetContainer = '<div class=\"tweet-container\" id=\"' + containerId + '\"></div>';
    $(wrapperClass).prepend(tweetContainer);

    twttr.widgets.createTweet(id,
        document.getElementById(containerId),
        {
            align: 'center'
        });
}