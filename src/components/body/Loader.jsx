import { useState, useEffect } from 'react';


// TODO: animate the loading: Loading. Loading.. Loading...

function Loader () {

    const [ loadingMessage, setLoadingMessage ] = useState("Loading...");


    return (
        <section>
            <h2>{loadingMessage}</h2>
        </section>
    )
}

export default Loader;