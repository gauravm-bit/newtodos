import React from 'react';

class ToDoForm extends React.Component {

    state = {
        value: ""
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.value);
    }


    render() {

        return <div>
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter here"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </form>
        </div>
    }
}
export default ToDoForm;