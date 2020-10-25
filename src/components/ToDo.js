import React from 'react'

const ToDo = props => {
    console.log(props);
    return <div onClick={props.toggleState} style = {{ textDecoration : props.todo.complete? "line-through": ""}}>
        {props.todo.text}
    </div>

}
export default ToDo;