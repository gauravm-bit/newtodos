import React from "react"
import ToDoForm from './ToDoForm'
import './ToDoList.css'

class ToDoList extends React.Component {

    state = {
        todos: []
    }

    render() {
        return <div className="to-Do-list">
            <h1>To-Do-List</h1>
            <ToDoForm />
        </div>
    }
}
export default ToDoList;