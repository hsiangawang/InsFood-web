import React, {Component} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Register } from './Register';
import { Login } from './Login';
import Home from './Home'

import logo from "../assets/images/logo.png";
// import Home from "./Home";

class Main extends Component {

    getLogin = () => {
        return this.props.isLoggedIn ? <Redirect to="/home"/> : <Login handleLoginSucceed={this.props.handleLoginSucceed}/>;
    }

    getHome = () => {
        return this.props.isLoggedIn ? <Home/> : <Redirect to="/login"/>;
    }

    render() {
        return (
            <div className="main">
                {
                    this.props.isLoggedIn ? null : <img src={logo} alt="logo" className="App-logo"/>
                }
                <Switch>
                    {/*<Route exact path="/" component={Login}/>*/}
                    <Route path="/login" render={this.getLogin}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/home" render={this.getHome}/>
                    {/*<Route path="/search" component={Search}/>*/}
                    {/*<Route path="/home" component={Home}/>*/}
                    <Route render={this.getLogin}/>

                </Switch>
            </div>

        );
    }
}

export default Main;