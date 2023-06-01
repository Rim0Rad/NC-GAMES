import { Link, useNavigate } from 'react-router-dom';
import { fetchUsers } from '../../../api/users.js';

function LoginPage ( { setLogedIn }) {
    
    const navigate = useNavigate()

    function handlerSubmit(event) {
        event.preventDefault()

        fetchUsers()
        .then( users => {
            if(users.some( user => user.username === event.target[0].value)){
                setLogedIn({username: event.target[0].value})
                sessionStorage.setItem('logedIn', event.target[0].value)
                navigate('/')
            }else{
                alert("User not found")
            }
        })
    }

    function handleFocus (event) {
        event.target.select();
    }

    return (
        <section>
            <h2>""Login Page""</h2>
            <section>
                <form onSubmit={handlerSubmit}>
                    <label>Username</label>
                    <input onFocus={handleFocus} required></input>
                    <label>Password</label>
                    <input type="password" onFocus={handleFocus} required></input>
                    <button type="submit">Log In</button>
                </form>
                <Link to='/signup'><button>Sing Up</button></Link>
            </section>
        </section>
    )
}

export default LoginPage;