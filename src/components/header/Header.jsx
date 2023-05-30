import Nav from './Nav.jsx'

import { Link } from 'react-router-dom';

function Header () {
    return (
        <section className="header">
            <h1>""Header""</h1>
            <section>
                <h1>Title</h1>
                <Link to='/login'><button>Login</button></Link>
            </section>
            <Nav/>
        </section>
    )
}

export default Header;