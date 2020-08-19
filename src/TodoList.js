import React from 'react';
import Todo from './components/Todo';

class TodoList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <Todo />
            </React.Fragment>
        )
    }
}

export default TodoList;