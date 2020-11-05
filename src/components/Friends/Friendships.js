import React, {Component, useState} from 'react';
import {SearchBar} from "../SearchBar";
import CompCard from "./Comp_card";

import {UserSearch} from "./userSearch";

export function Friendships(props) {
    const [term, setTerm] = useState(props.term || '');
    const myID = document.cookie;

    let [userInfo, searchParams, setSearchParams] = UserSearch(myID);


    function search(term) {
        setTerm(term);
        console.log(term);
        setSearchParams(term);
    }

    return (
        <div className="search-area">
            <SearchBar search={search} placeholder='Find a Friend'/>
            {
                userInfo ? <CompCard userInfo={userInfo}/> : <h3>USER NOT FOUND !!</h3>
            }
        </div>
    );
}
