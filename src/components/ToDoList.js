import React from "react"
import ToDoForm from './ToDoForm'
import ToDo from './ToDo'
import './ToDoList.css'

class ToDoList extends React.Component {

    state = {
        todos: [],
    }

    addToDo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }

    toggleState = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                }
                else {
                    return todo;
                }
            })
        })
    }

    render() {

        console.log(this.state.todos);
        return <div className="to-Do-list">
            <h1>To-Do-List</h1>
            <ToDoForm addToDo={this.addToDo} />
            {this.state.todos.map((todo) => {
                return <ToDo
                    key={todo.id}
                    todo={todo}
                    toggleState={() => this.toggleState(todo.id)}
                />

            })}
            <div>
                No of active tods : {this.state.todos.filter(todo => !todo.complete).length}
            </div>
        </div>
    } 
}
export default ToDoList;