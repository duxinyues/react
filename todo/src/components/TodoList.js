import React from 'react';
import Todo from './Todo'

const TodoList = ({todos,toggleTodo})=>(
    <ul>
        {todos.map(todo =>
            <Todo 
                key={todo.id}
                {...todo}
                onClick={()=>toggleTodo(todo.id)}
            />
        )}
    </ul>
)

export default TodoList