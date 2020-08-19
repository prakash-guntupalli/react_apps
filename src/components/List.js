import React from 'react';


const List = (props) => {
    return (
        <div style={{margin: '5px'}}>
            <label>
                <input type="checkbox" onChange={props.handleCheck} style={{ margin: '0 5px 0 0' }}/>
                <span className='add-item'>{props.item}</span>
                <br />
            </label>

        </div>
    )
}

export default List;