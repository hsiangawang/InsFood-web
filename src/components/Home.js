import React, {Component} from 'react';
import logo from '../assets/images/logo.png';
import SearchBar from "./SearchBar";
import {Route, Switch} from "react-router-dom";
import {Register} from "./Register";
import SearchResults from "./Search/SearchResults";

class Home extends Component {
    render() {
        return (
            <div className="search-area">
                <SearchBar/>
                <SearchResults/>
            </div>
        );
    }
}

export default Home;