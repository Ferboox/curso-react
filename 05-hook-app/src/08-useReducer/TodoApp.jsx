import { useEffect, useReducer } from "react";
import { useTodos } from "../hooks/useTodos";
import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    const {todos, todosCount, pendingTodosCount, handleNewTodo, handleRemoveTodo, handleToggleTodo } = useTodos();

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ) || [])
    }, [todos]);
    
    return (
        <>
            <h1>TodoApp: {todosCount} <small>Pendientes {pendingTodosCount}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">

                    {/* TodoList */}
                    <TodoList todos={todos} onRemoveTodo={ handleRemoveTodo } onToggleTodo={ handleToggleTodo}/>
                </div>

                <div className="col-5">
                    {/* TodoAdd onNewTodo */}
                    <TodoAdd onNewTodo={ handleNewTodo }/>
                </div>
            </div>

            
        </>
    )
}
