import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: "Ferboox",
        email: "fernando@outlook.com",
    });

    const { username, email } = formState;


    const onInputChange = ({target}) => {

        const {name, value} = target;

        setFormState({
            ...formState,
            [ name ]: value
        }, []);
    }

    useEffect( () => {
        // console.log('object');
    }, [formState]);


    return (
        <>
            <h1>Formulario</h1>
            <hr />

            <input type="text"  className="form-control" placeholder="Username" name="username"  onChange={onInputChange} value={username}/>

            <input type="email"  className="form-control mt-2" placeholder="Email" name="email" onChange={onInputChange} value={email} />


            {
                username == 'Ferboox' &&

                <Message/>

            }
        </>
    )
}
