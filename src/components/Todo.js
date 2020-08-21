import React from 'react';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { connect } from 'react-redux';
import { addTask } from '../redux/store';


class Todo extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            task : ''
        }
    }

    textChange(event){
            this.setState({
                task : event.target.value
            })
    }
    addItem(){
        if(this.state.task){
            this.props.submitNewTask(this.state.task);
            this.setState({
                task : ''
            })
        }
    }
    render() {
        let todoItem = this.state.task;

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
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitNewTask : (task) => {
            dispatch(addTask(task))
        }
    }
}

export default connect(null, mapDispatchToProps)(Todo);