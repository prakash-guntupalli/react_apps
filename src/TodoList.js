import React from 'react';
import Todo from './components/Todo';
import List from './components/List';
import Completed from './components/Completed';
import Quote from './components/Quotes';
// import './style.css';
// import './quotes.json';

class TodoList extends React.Component{
    render(){
        return(
            <div className="flex-container">
                <Quote />
                <Todo />
                <div className="flex-list">
                    <List />
                    <Completed />
                </div>
            </div>
        )
    }
}

export default TodoList;