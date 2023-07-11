import { Link, useNavigate } from 'react-router-dom';
import { fetchUsers } from '../../../api/users.js';

function LoginPage ( { setLogedIn }) {
    
    const navigate = useNavigate()

    function handlerSubmit(event) {
        event.preventDefault()

        fetchUsers( "username", event.target[0].value)
        .then( user => {
            console.log("user", user)
            // if(user.some( user => user.username === event.target[0].value)){
            //     setLogedIn({username: event.target[0].value})
            //     sessionStorage.setItem('logedIn', event.target[0].value)
            //     navigate('/home')
            // }else{
            //     alert("User not found")
            // }
        })
    }

    function handleFocus (event) {
        event.target.select();
    }

    return (
        <section id="loginpage">
            <h2>Login</h2>
            <section id="loginbox">
                <form id="loginform" onSubmit={handlerSubmit}>
                    <label className="loginformitems">Username</label>
                    <input className="loginformitems" onFocus={handleFocus} autoFocus placeholder='Username' required></input>
                    <label className="loginformitems" >Password</label>
                    <input className="loginformitems"  type="password" onFocus={handleFocus} placeholder='Password' required></input>
                    <button className="loginformitems"  type="submit">Log In</button>
                </form>
                <Link  to='/signup'><button id="signupbt" >Sign Up</button></Link>
            </section>
        </section>
    )
}

export default LoginPage;