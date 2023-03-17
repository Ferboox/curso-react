import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, username, email, password, onResetForm} = useForm({
        username: '',
        email: '',
        password: ''
    })

    // const { username, password, email} = formState;


    return (
        <>
            <h1>Formulario con custom hook</h1>
            <hr />

            <input type="text"  className="form-control" placeholder="Username" name="username"  onChange={onInputChange} value={username}/>

            <input type="email"  className="form-control mt-2" placeholder="Email" name="email" onChange={onInputChange} value={email} />

            <input type="password"  className="form-control mt-2" placeholder="Contraseña" name="password" onChange={onInputChange} value={password} />

            <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>
        </>
    )
}
