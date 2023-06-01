import { useEffect } from 'react';
import Nav from './Nav.jsx'

import { Link } from 'react-router-dom';

function Header ( { logedIn, setLogedIn }) {

    useEffect( () =>{

    }, [ logedIn ])

    function handleLogOut(event) {
        setLogedIn({username:false})
        sessionStorage.removeItem('logedIn')
    }

    if(logedIn.username){
        return (
            <section className="header">
                <section>
                    <h1>Board Game Reviews</h1>
                    <Link to='/profile'> <h2>{logedIn.username}</h2></Link>
                    <button onClick={handleLogOut}>Log Out</button>
                </section>
                <Nav/>
            </section>
        )
        
    }

    return (
        <section className="header">
            <section>
                <h1>Board Game Reviews</h1>
                <Link to='/login'><button>Login</button></Link>
            </section>
            <Nav/>
        </section>
    )
}

export default Header;