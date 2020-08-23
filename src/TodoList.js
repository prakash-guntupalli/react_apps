import React from 'react';
import Todo from './components/Todo';
import List from './components/List';
import Completed from './components/Completed';
// import './style.css';

class TodoList extends React.Component{
    render(){
        return(
            <div>
                <Todo />
                <List />
                <Completed />
            </div>
        )
    }
}

export default TodoList;