import React, {Component} from 'react';
import { Icon } from 'antd';
import {Link} from "react-router-dom";

class TopBar extends Component {
    render() {
        return (
            <header className="App-header">
                <span className="App-title">InstaFood</span>
                {
                    this.props.isLoggedIn ?
                    <a className="logout" onClick={this.props.handleLogout} >
                        <Icon type="logout"/>{' '}Logout
                    </a>
                        : null
                }
            </header>
        );
    }
}

export default TopBar;
