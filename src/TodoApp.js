import React from "react";
import { CssBaseline, Paper, Typography, FormControl, InputLabel, Input, TextField, Button } from "@material-ui/core";
import {TodoList} from "./TodoList";
import { Redirect } from 'react-router-dom';

export class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], text: '', priority: 0, dueDate: ""};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {
        if (localStorage.getItem("isLoggedIn") === "false") {
            redirect = "/";
        } else {
            redirect = "/todo";
        }
        return (
            <div className="App">
                <Redirect to={redirect}/>
                <CssBaseline/>
                <Paper className="paper2">

                <br/>
                <br/>
                <form onSubmit={this.handleSubmit} className="todo-form" name="todo-form-app">
                    <Typography variant="headline">New TODO</Typography>

                    <FormControl margin="none">
                        <InputLabel htmlFor="text"> Text </InputLabel>
                        <Input 
                            id="text"
                            name="text"
                            onChange={this.handleTextChange}
                            value={this.state.text} 
                            autoFocus>
                        </Input>
                    </FormControl>

                    <br/><br/>
                    
                    <FormControl margin="none">
                        <InputLabel htmlFor="priority">Priority</InputLabel>
                        <Input
                            id="priority"
                            type="number"
                            onChange={this.handlePriorityChange}
                            value={this.state.priority}
                        >
                        </Input>
                    </FormControl>

                    <br/><br/>

                    <FormControl margin="none">
                        
                        <TextField
                            id="due-date"
                            label="Due Date"
                            onChange={this.handleDateChange}
                            value={this.state.dueDate}
                            type="date"
                        >
                        </TextField>
                    </FormControl>

                    <br/><br/>
                    <Button
                        type="submit"
                        fullwidth
                        variant="raised"
                        color="primary"
                        className="submit"
                    >
                        Add #{this.state.items.length + 1}
                    </Button>
                </form>
                <br/><br/>
                <TodoList todoList={this.state.items}/>
                </Paper>
            </div>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date.target.value
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }

}

var redirect;