import React, {Component, useState} from 'react';
import {SearchBar} from "../SearchBar";
import CompCard from "./Comp_card";
import FriendCards from "./FriendCards";
import {UserSearch} from "./userSearch";
import {UserFriendSearch} from "./userFriendSearch";
import Result from "../Search/Comp_result";

export function Friendships(props) {
    const [term, setTerm] = useState(props.term || '');
    const myID = document.cookie;

    let [userInfo, searchParams, setSearchParams] = UserSearch(myID);
    let [userInfos, searchFriends, setSearchFriends] = UserFriendSearch(myID);
    // const userComponent = {userInfo}.map(b => <CompCard key={b[0]} nickName={b[3]}/>);

    function search(term) {
        setTerm(term);
        console.log(term);
        setSearchParams(term);
    }

    function reSet(userID) {
        setSearchFriends(userID);
    }

    return (
        <div className="search-area">
            {userInfo}
            <SearchBar search={search} placeholder='Find a Friend'/>
            {
                userInfo ? <CompCard userInfo={userInfo}/> : <h3>USER NOT FOUND !!</h3>
            }
            {/*<CompCard userInfo={userInfo}/>*/}
            <div>
                ------------------------------------------------------------------------------
            </div>
            <FriendCards userInfos={userInfos} reSet={reSet}/>
        </div>
    );
}
