import Nav from './Nav.jsx'

function Header () {
    return (
        <section className="header">
            <h1>""Header""</h1>
            <section>
                <h1>Title</h1>
                <button>Login</button>
            </section>
            <Nav/>
        </section>
    )
}

export default Header;