import React, {Component, useState} from 'react';
import {SearchBar} from "../SearchBar";
import FriendCards from "./FriendCards";
import {UserFriendSearch} from "./userFriendSearch";
import Result from "../Search/Comp_result";
import {API_ROOT} from "../../constants";

class FriendList extends Component {
    state = {
        userInfos: [],
        myID: document.cookie,
    }

    // const myID = document.cookie;
    // let [userInfos, searchFriends, setSearchFriends] = UserFriendSearch(myID);
    // const userComponent = {userInfo}.map(b => <CompCard key={b[0]} nickName={b[3]}/>);

    componentDidMount() {
        fetch(`${API_ROOT}/friendship/${this.state.myID}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(response.statusText);
            })
            .then((data) => {
                // console.log('1',data);
                this.setState({userInfos: data})
                // return data;
            })
            .catch((err) => {
                console.error(err);
            });
    }

    refreshFriends = fList => this.setState({userInfos: fList});

    render() {
        return (
            <div className="search-area">
                <FriendCards userInfos={this.state.userInfos} refresh={this.refreshFriends}/>
            </div>
        );
    }

}

export default FriendList;
