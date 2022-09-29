import React from 'react';

function TodoListItem({id,label}) {
    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                
                <p className="d-flex align-items-center mb-0">
                    <input className="list-input" type="checkbox"/>
                    <span className="js-list-span ms-4">{label}</span>
                </p>

                <button className="btn btn-danger js-list-btn" >DELETE</button>
            </li>
        </>
    );
}

export default TodoListItem;