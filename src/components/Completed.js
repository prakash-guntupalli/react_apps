import React from 'react';

const Completed = (props) => {
    return (
        <div style = {{margin: '10%' }}>
            <h3> Completed Tasks </h3>
            <label>
                <span className='completed-item'>{props.item}</span>
                <br />
            </label>
        </div>
    )
}

export default Completed;