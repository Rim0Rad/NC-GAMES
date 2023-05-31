import Nav from './Nav.jsx'

import { Link } from 'react-router-dom';

function Header () {
    return (
        <section className="header">
            <section>
                <h1>Board Game Reviews</h1>
                <Link to='/login'><button>Login</button></Link>
                {/* Temp button to go to profile page */}
                <Link to='/profile'><button>Profile</button></Link> 
            </section>
            <Nav/>
        </section>
    )
}

export default Header;