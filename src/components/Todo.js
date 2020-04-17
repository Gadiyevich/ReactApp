import React, { Component } from 'react';
import Todos from '../Todos';
import AddTodo from '../AddTodo';

class Home extends Component {

    state = {
        todos: [
            { id: 1, content: 'make todo list' },
            { id: 2, content: 'read a book' },
            { id: 3, content: 'play football' },
            { id: 4, content: 'learn React' }

        ]
    }

    deleteToDo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        })
        this.setState({
            todos: todos
        })
    }


    addTodo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo]
        this.setState({
            todos
        })
    }
    render() {
        return (
            <div className='container'>
                <h1 className="center red-text">Todo's</h1>

                <div className="row">
                    <div className="col s12 center ">
                        <div className="card-panel cyan darken-4">
                            <span className="white-text ">I am a simple Todo List. You can add, delete and manage your Todo's you see below!
        </span>
                        </div>
                    </div>
                </div>

                <div className="collection">
                    <a href="#" className="collection-item">  <p className="z-depth-4"><Todos todos={this.state.todos} deleteToDo={this.deleteToDo} /></p></a>
                </div>
                <AddTodo addTodo={this.addTodo} />
            </div>
        )
    }
}

export default Home;