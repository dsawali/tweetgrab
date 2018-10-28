let searchContext ='hashtag';
let inputTextValue ='';

// Stores value of dropdown menu in a variable
function selectDropdownValue() {
    searchContext = document.getElementById('search-context').value;
    console.log(searchContext);
}

// Stores value of input box in a variable
function getInputTextValue() {
    inputTextValue = document.getElementById('search-box').value;
    console.log(inputTextValue);
}


