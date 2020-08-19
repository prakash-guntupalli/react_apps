import React from 'react';

const Completed = (props) => {
    return (
        <div style={{margin: '5px'}}>
            <label>
                {/* <input type="checkbox" onChange={props.handleCheck} style={{ margin: '0 5px 0 0' }}/> */}
                <span className='completed-item'>{props.item}</span>
                <br />
            </label>
        </div>
    )
}

export default Completed;