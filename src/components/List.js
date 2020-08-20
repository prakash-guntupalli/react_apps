import React from 'react';
import { connect } from 'react-redux';
import { toggleStatus } from '../redux/store';


const List = (props) => {
    let todoList = props.list;
    return (
        <div style = {{margin: '10%' }}>
            {todoList.map( (item) => {
                return (
                    <div style={{margin: '5px'}} key={item.id}>
                        <input type="checkbox" onChange={() => props.markComplete(item.id)} style={{ margin: '0 5px 0 0' }}/>
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
        markComplete : (id) => {
            dispatch(toggleStatus(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);