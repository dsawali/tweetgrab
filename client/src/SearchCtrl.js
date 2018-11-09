import React, { Component } from 'react';
import OptionCtrl from './OptionCtrl.js';

class SearchCtrl extends Component {
    render() {
        return (
            <div className="input-wrapper">
                <input type="text" id="search-box"></input>
                <OptionCtrl></OptionCtrl>
            </div>
        );
    }
}

export default SearchCtrl;