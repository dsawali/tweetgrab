import React, { Component } from 'react';

class SearchCtrl extends Component {
    render() {
        return (
            <select id="search-context">
                <option value="hashtag" value="selected">hashtag</option>
                <option value="user">user</option>
                <option value="text">text</option>
            </select>
        );
    }
}

export default SearchCtrl;