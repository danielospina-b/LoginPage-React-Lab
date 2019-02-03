import React, {Component} from 'react';
import './App.css';
import { Login } from './component/Login';
import { TodoApp } from "./TodoApp";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import logo from './logo.svg';
import { AppBar, Tabs, Tab } from "@material-ui/core";

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <AppBar title="My App" position="relative">
                        <Tabs>
                            <Tab label="Login" 
                                component={Link}
                                to="/"
                            />
                            <Tab label="TodoApp" 
                                component={Link}
                                to="/todo" />
                        </Tabs>
                    </AppBar>

                    <div>
                        <Route exact path="/" component={LoginView}/>
                        <Route path="/todo" component={TodoView}/>
                    </div>
                </div>
            </Router>
        );
    }
}

const LoginView = () => (
    <Login/>
);

const TodoView = () => (
    <div>
        <TodoApp/>
    </div>
);

var isLoggedIn = false;

export default App;
