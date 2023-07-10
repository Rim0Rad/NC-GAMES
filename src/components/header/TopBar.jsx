import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function TopBar ( { logedIn }) {

    useEffect( () =>{

    }, [ logedIn ])


    function handleLogOut(event) {
        setLogedIn({username:false})
        sessionStorage.removeItem('logedIn')
    }
    
    return (
        <section className="topbar">
            <h1>Board Game Reviews</h1>
            { logedIn.username ? 
                <section> 
                    <Link to='/profile'> <h2>{logedIn.username}</h2></Link> 
                    <Link to='/'><button onClick={handleLogOut}>Log Out</button></Link> 
                </section>
                :<Link to='/login'><button id="loginbt">Login</button></Link>

            }
        </section>
    )
    
}

