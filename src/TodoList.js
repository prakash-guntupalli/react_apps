import React from 'react';
import Todo from './components/Todo';
import List from './components/List';
import Completed from './components/Completed';
// import './style.css';

class TodoList extends React.Component{
    render(){
        return(
            <div className="flex-container">
                <Todo />
                <div className="flex-container_list">
                    <List />
                </div>
                <div className="flex-container_list">
                    <Completed />
                </div>
            </div>
        )
    }
}

export default TodoList;