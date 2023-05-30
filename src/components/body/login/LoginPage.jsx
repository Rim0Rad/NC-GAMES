import { Link } from 'react-router-dom';

function LoginPage () {

    return (
        <section>
            <h2>""Login Page""</h2>
            <section>
                <form>
                    <label>username</label>
                    <input></input>
                    <label>password</label>
                    <input></input>
                    <button>Log In</button>
                </form>
                <Link to='/signup'><button>Sing Up</button></Link>
            </section>
        </section>
    )
}

export default LoginPage;