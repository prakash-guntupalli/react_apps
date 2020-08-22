import React from 'react';
import { connect } from 'react-redux';
import { toggleStatus } from '../redux/actions';



const Completed = (props) => {
    let completedList = props.list.filter(item => item.completed === true);
    return (
        <React.Fragment>
            {
                completedList && 
                <div style = {{margin: '10%' }}>
                    <h3> Completed List </h3>
                    {completedList.map( (item) => {
                        return (
                            <div style={{margin: '5px'}} key={item.id}>
                                <input type="checkbox" checked="checked" onChange={() => props.markToDo(item.id, false)} style={{ margin: '0 5px 0 0' }}/>
                                <span className='add-item'>{item.name}</span>
                                <br />

                            </div>
                        )
                    })}
                </div>
            }
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        list : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        markToDo : (id, status) => {
            dispatch(toggleStatus(id, status))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Completed);