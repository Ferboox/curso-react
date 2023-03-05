import { useState } from 'react';

type Props = {
    value: number;
}

export const CounterApp = ({value}: Props) => {

    const [counter, setCounter] = useState( value );

    const handleAdd = (action:boolean) =>{
        const num = action ? 1 : -1;

        setCounter(counter + num)
    }

    const handleReset = () => setCounter(value)

    return(
        <>
            <h1>Counnter app</h1>
            <p>{ counter }</p>

            <button onClick={ () => handleAdd(true) }>+1</button>
            <button onClick={ () => handleAdd(false)}>-1</button>
            <button onClick={ () => handleReset() }>Reset</button>

        </>
    )
}
