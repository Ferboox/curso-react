import { TodoItem } from "./components/TodoItem"

export const TodoList = ( {todos, onRemoveTodo, onToggleTodo} ) => {
    
    return (
        <>
            <ul className="list-group">
                {
                    todos.map( todo => (
                        // TodoItem
                        <TodoItem key={todo.id} todo={todo} onToggleTodo={onToggleTodo} onRemoveTodo={onRemoveTodo}/>
                    ))
                }
                
            </ul>
        </>
    )
}
