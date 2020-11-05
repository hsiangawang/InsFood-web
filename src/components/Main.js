import React, {Component} from 'react'
import {Switch, Route, Redirect, Link} from 'react-router-dom';
import { Register } from './Register';
import { Login } from './Login';
import { Home } from './Home';
import {Friendships} from './Friends/Friendships';
import FriendList from  "./Friends/FriendList"

import logo from "../assets/images/logo.png";
// import Home from "./Home";

class Main extends Component {

    getLogin = () => {
        return this.props.isLoggedIn ? <Redirect to="/home"/> : <Login handleLoginSucceed={this.props.handleLoginSucceed}/>;
    }

    getHome = () => {
        return this.props.isLoggedIn ? <Home/> : <Redirect to="/login"/>;
    }

    getFriends = () => {
        return this.props.isLoggedIn ? <Friendships/> : <Redirect to="/login"/>;
    }
    getFriendCards = () => {
        return this.props.isLoggedIn ? <FriendList/> : <Redirect to="/login"/>;
    }

    render() {
        return (
            <div className="main">
                {
                    this.props.isLoggedIn ? null : <img src={logo} alt="logo" className="App-logo"/>
                }
                {
                    this.props.isLoggedIn ?
                        <Link to="/home" className="direction_btn">Home</Link> : null
                }
                {
                    this.props.isLoggedIn ?
                    <Link to="/friendships" className="direction_btn">Add Friends</Link> : null
                }
                {
                    this.props.isLoggedIn ?
                    <Link to="/friendList" className="direction_btn">My Friends</Link> : null
                }

                <Switch>
                    {/*<Route exact path="/" component={Login}/>*/}
                    <Route path="/login" render={this.getLogin}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/home" render={this.getHome}/>
                    <Route path="/friendships" render={this.getFriends}/>
                    <Route path="/friendList" render={this.getFriendCards}/>
                    {/*<Route path="/search" component={Search}/>*/}
                    {/*<Route path="/home" component={Home}/>*/}
                    <Route render={this.getLogin}/>
                </Switch>
            </div>

        );
    }
}

export default Main;
