import React, {Component} from 'react';
import { Register } from './Register';
import logo from "../assets/images/logo.png";

class Main extends Component {
    render() {
        return (
            <div className="main">
                <img src={logo} alt="logo" className="App-logo"/>
                <div className="profile-entry main-register">
                    <Register/>
                </div>
            </div>

        );
    }
}

export default Main;