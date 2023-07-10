import { useState, useEffect } from 'react';


// TODO: animate the loading: Loading. Loading.. Loading...

function Loader () {

    const [ loadingMessage, setLoadingMessage ] = useState("Loading...");


    return (
        <sectio>
            <h2>{loadingMessage}</h2>
        </sectio>
    )
}

export default Loader;