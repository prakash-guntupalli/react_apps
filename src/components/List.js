import React from 'react';
import { connect } from 'react-redux';
import { toggleStatus } from '../redux/actions';


const List = (props) => {
    let todoList = props.list.filter(item => item.completed !== true);
    return (
        <div style = {{margin: '2% 10%' }}>
            {todoList.map( (item) => {
                return (
                    <div style={{margin: '5px'}} key={item.id}>
                        <input type="checkbox" onChange={() => props.markComplete(item.id, true)} style={{ margin: '0 5px 0 0' }}/>
                        <span className='add-item'>{item.name}</span>
                        <br />

                    </div>
                )

            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        list : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        markComplete : (id, status) => {
            dispatch(toggleStatus(id, status))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);