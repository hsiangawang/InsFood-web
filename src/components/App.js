import React from 'react';
import TopBar from "./TopBar";
import Main from "./Main";

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
    }

    render() {
        return (
            <div className="App">
                <TopBar handleLogout={this.handleLogout} isLoggedIn={this.state.isLoggedIn}/>
                <Main handleLoginSucceed={this.handleLoginSucceed} isLoggedIn={this.state.isLoggedIn}/>
            </div>
        );
    }
}

export default App;
