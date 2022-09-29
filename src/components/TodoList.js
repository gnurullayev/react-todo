import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({todos}) {
    return (
        <ul className="list-group js-list-group">
            {
                todos.map(el => (
                    <TodoListItem key = {el.id} {...el}/>
                ))
            }
        </ul>
    );
}

export default TodoList;