import React, {Component} from 'react'
import {Switch, Route, Redirect, Link} from 'react-router-dom';
import { Register } from './Register';
import { Login } from './Login';
import { Home } from './Home';
import {Friendships} from './Friends/Friendships';
import FriendList from  "./Friends/FriendList"
import LikeLists from "./Favorite/Likelists";
import ReccomendLists from "./FriendRecommend/ReccomendLists";

import logo from "../assets/images/logo.png";
import {UpdateUser} from "./UpdateUserInfo";
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

    getUserInfo = () => {
        return this.props.isLoggedIn ? <UpdateUser/> : <Redirect to="/login"/>;
    }

    getLikeLists = () => {
        return this.props.isLoggedIn ? <LikeLists/> : <Redirect to="/login"/>;
    }

    getReccomendLists = () => {
        return this.props.isLoggedIn ? <ReccomendLists/> : <Redirect to="/login"/>;
    }

    render() {
        return (
            <div className="main">
                <div className="home-tab">
                {
                    this.props.isLoggedIn ? null : <img src={logo} alt="logo" className="App-logo"/>
                }
                {
                    this.props.isLoggedIn ?
                        <Link to="/home" className="direction_btn"><button className="direction_button">Find Food</button></Link> : null
                }
                {
                    this.props.isLoggedIn ?
                        <Link to="/likeLists" className="direction_btn"><button className="direction_button">Like Lists</button></Link> : null
                }
                {
                    this.props.isLoggedIn ?
                        <Link to="/recommend" className="direction_btn"><button className="direction_button">Recommendation</button></Link> : null
                }
                {
                    this.props.isLoggedIn ?
                        <Link to="/friendships" className="direction_btn"><button className="direction_button">Add Friends</button></Link> : null
                }
                {
                    this.props.isLoggedIn ?
                        <Link to="/friendList" className="direction_btn"><button className="direction_button">My FriendList</button></Link> : null
                }
                {
                    this.props.isLoggedIn ?
                        <Link to="/update" className="direction_btn"><button className="direction_button">User Update</button></Link> : null
                }
                </div>
                <Switch>
                    {/*<Route exact path="/" component={Login}/>*/}
                    <Route path="/login" render={this.getLogin}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/home" render={this.getHome}/>
                    <Route path="/friendships" render={this.getFriends}/>
                    <Route path="/friendList" render={this.getFriendCards}/>
                    <Route path="/update" render={this.getUserInfo}/>
                    <Route path="/likeLists" render={this.getLikeLists}/>
                    <Route path="/recommend" render={this.getReccomendLists}/>
                    {/*<Route path="/search" component={Search}/>*/}
                    {/*<Route path="/home" component={Home}/>*/}
                    <Route render={this.getLogin}/>
                </Switch>
            </div>

        );
    }
}

export default Main;
