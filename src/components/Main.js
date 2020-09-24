import React, {Component} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Register } from './Register';
import { Login } from './Login';

import logo from "../assets/images/logo.png";

class Main extends Component {
    // getLogin = () => {
    //     return this.props.isLoggedIn ? <Redirect to="/home"/> : <Login handleLoginSucceed={this.props.handleLoginSucceed}/>;
    // }
    //
    // ) => {getHome = (
    //     return this.props.isLoggedIn ? <Home/> : <Redirect to="/login"/>;
    // }

    render() {
        return (
            <div className="main">
                <switch>
                <img src={logo} alt="logo" className="App-logo"/>
                    <Route exact path="/" component={Login}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    {/*<Route path="/home" render={this.getHome}/>*/}
                    {/*<Route render={this.getLogin}/>*/}
                </switch>
            </div>

        );
    }
}

export default Main;