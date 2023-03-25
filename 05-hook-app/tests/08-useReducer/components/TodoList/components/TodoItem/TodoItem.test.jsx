import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../../../../src/08-useReducer/components/TodoList/components/TodoItem";

describe('Pruebas en <TodoItem/>', () => { 

    const todo = {
        id: 1,
        description: 'Piedra',
        done: false
    }

    const onRemoveTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() )

    test('debe de mostrar el Todo Pendiente de completar', () => { 

        render( <TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onRemoveTodo={onRemoveTodoMock}/>);

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('align-self-center');
        expect( spanElement.className ).not.toContain('text-decoration-line-through');

     })

     test('debe de mostrar el Todo completado', () => { 

        todo.done = true;

        render( <TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onRemoveTodo={onRemoveTodoMock}/>);

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('text-decoration-line-through');

     })

     test('span debe de llamar el ToggleTodo cuando se hace click', () => { 

        render( <TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onRemoveTodo={onRemoveTodoMock}/>);

        const spanElement = screen.getByLabelText('span');
        fireEvent.doubleClick( spanElement);

        expect( onToggleTodoMock).toHaveBeenCalledWith(todo.id);

     });

     test('button debe de llamar el deleteTodo', () => { 

        render( <TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onRemoveTodo={onRemoveTodoMock}/>);

        const buttonElement = screen.getByRole('button');
        fireEvent.click( buttonElement);

        expect( onRemoveTodoMock).toHaveBeenCalledWith(todo.id);

     })
 })