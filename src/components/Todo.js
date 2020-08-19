import React from 'react';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

import List from './List';
// import Completed from './Completed';


class Todo extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            task : '',
            list : []
        }
    }

    textChange(event){
            this.setState({
                task : event.target.value
            })
    }
    addItem(){
        if(this.state.task){
            this.setState({
                list : [...this.state.list, this.state.task],
                task : ''
            })
        }
    }
    render() {
        let todoItem = this.state.task;
        let todoList = this.state.list;

        return (
            <div style = {{margin: '10%' }}>
                <h2> Todo List</h2>
                <br />
                <TextField id="standard-basic" label="Add Item" value={todoItem} onChange={(e) => this.textChange(e)}/>

                <Tooltip title="Add" aria-label="add" onClick={()=> this.addItem()}>
                    <Fab color="primary" style = {{'margin': 5}}>
                        <AddIcon />
                    </Fab>
                </Tooltip>

                {todoList.map( (item, idx) => {
                    return <List item={item} key={idx} />
                })
                }

            </div>
        )
    }
}

export default Todo;