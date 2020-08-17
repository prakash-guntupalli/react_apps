import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Todo extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            task : '',
            list : []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.submitChange = this.submitChange.bind(this);
    }

    handleChange(event){
        this.setState({
            task : event.target.value
        })
    }
    submitChange(){
        this.setState({
            list : [...this.state.list, this.state.task]
        })
    }
    handleCheck(event){
        let element = event.target;
        let textElement = element.parentNode.parentNode.firstElementChild.childNodes[1];
    }
    render() {
        let todoItem = this.state.task;
        let todoList = this.state.list;

        return (
            <div style = {{display: 'flex', flexDirection: 'column', margin: '10%' }}>
                <TextField id="standard-basic" label="Add Item" value={todoItem} onChange={this.handleChange}/>

                <Button variant="contained" color="primary" onClick={this.submitChange}> Save </Button>

                <h2>Today's Todo List</h2>
                <ul>
                    {todoList.map( (item, idx) => {
                        return <CheckBox item={item} key={idx} handleCheck={this.handleCheck}/>
                        // return <li key={idx}>{item}</li>
                    })
                    }
                </ul>

            </div>
        )
    }
}

const CheckBox = (props) => {
    return (
        <div>
            <label>
                <input type="checkbox" onChange={props.handleCheck} />
                <span>{props.item}</span>
                <br />
            </label>

        </div>
    )
}

export default Todo;