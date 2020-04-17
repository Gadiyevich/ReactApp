import React, { Component } from "react";

class AddTodo extends Component {


    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handlSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.handlSubmit}>
                <label>Add new todo: </label>
                <input type="text" onChange={this.handleChange} value={this.state.content}></input>
            </form>
        )
    }
}

export default AddTodo;