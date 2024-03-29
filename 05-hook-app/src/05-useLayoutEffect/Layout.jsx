import { Loading, Quote } from "../03-examples/components";

import { useFetch, useCounter } from "../hooks"

export const Layout = () => {

    const { counter, increment, decrement } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    const { author, quote} = !!data && data[0];

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading ?  <Loading /> : <Quote author={author} quote={quote}/>
            }

            <button onClick={() => increment()} className="btn btn-primary" disabled={isLoading}>
                Next quote
            </button>
            <button onClick={() => decrement()} className="btn btn-primary" disabled={isLoading}>
                Previous quote
            </button>
           
        </>
    )
}
