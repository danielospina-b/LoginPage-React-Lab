import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Redirect} from "react-router-dom";
import './Login.css';


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        if (localStorage.getItem("isLoggedIn") === "false") {
            this.state = {
                fireRedirect: "/"
            }
        } else {
            isLoggedIn = true;
        }
    }

    render(){
        if (isLoggedIn) {
            return <Redirect to="/todo"/>
        }
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="headline">Sign in</Typography>
                        <form className="form" onSubmit={this.handleSubmit} name="login-form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className="submit"
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
                <Redirect to={this.state.fireRedirect}/>
            </React.Fragment>
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        if (localStorage.getItem("loginUser") === email && localStorage.getItem("loginPass") === password ) {
            localStorage.setItem("isLoggedIn", "true");
            this.setState({
                fireRedirect: "/todo"
            })
            
        } else {
            alert("Wrong Credentials. \nUse: admin admin");
        }

    }

}

var isLoggedIn = false;
localStorage.setItem("loginUser", "admin");
localStorage.setItem("loginPass", "admin");
