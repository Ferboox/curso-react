import { useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    const handleNewTodo = ( todo ) => {
        const action = {
            type: 'Add Todo',
            payload: todo
        };

        dispatch(action);
    }

    const handleRemoveTodo = (id) => {
        const action = {
            type: 'Remove Todo',
            payload: id
        };

        dispatch(action)
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: 'Toggle Todo',
            payload: id
        };

        dispatch(action)
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo, 
        handleRemoveTodo, 
        handleToggleTodo
    }
}