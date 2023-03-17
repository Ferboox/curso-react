import { useForm } from "../../../hooks"

export const TodoAdd = ( {onNewTodo}) => {

    const {onInputChange, description, onResetForm} = useForm({
        description: ''
    })

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description
        }

        onNewTodo(newTodo);
        onResetForm()
    }


    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form onSubmit={onFormSubmit}>
                <input type="text" placeholder="Descripción" className="form-control" name="description" onChange={onInputChange} value={description}/>

                <button type="submit" className="btn btn-outline-primary mt-1">Agregar</button>
            </form>
        </>
    )
}
