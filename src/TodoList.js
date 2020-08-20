import React from 'react';
import Todo from './components/Todo';
import List from './components/List';
import Completed from './components/Completed';

class TodoList extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Todo />
                <List />
                <Completed />
            </React.Fragment>
        )
    }
}

export default TodoList;