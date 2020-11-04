import React from 'react';
import TopBar from "./TopBar";
import Main from "./Main";
import {Link} from "react-router-dom";

class App extends React.Component {
    state = {
        //isLoggedIn: Boolean(localStorage.getItem(TOKEN_KEY)),
        isLoggedIn: false,
    }

    // handleLoginSucceed = (token) => {
    //     localStorage.setItem(TOKEN_KEY, token)
    //     this.setState({ isLoggedIn: true });
    // }
    handleLoginSucceed = () => {
        this.setState({ isLoggedIn: true });
    }

    handleLogout = () => {
        this.setState({ isLoggedIn: false });
        document.cookie = null;
    }

    handleFriends = () => {
        this.setState({ isLoggedIn: false });
    }

    render() {
        return (
            <div className="App">
                <TopBar handleLogout={this.handleLogout} isLoggedIn={this.state.isLoggedIn}/>
                <Main handleLoginSucceed={this.handleLoginSucceed} isLoggedIn={this.state.isLoggedIn} handleFriends={this.handleFriends}/>
            </div>
        );
    }
}

export default App;
