import { Link, useNavigate } from 'react-router-dom';
import { fetchUsers } from '../../../api/users.js';

function LoginPage ( { setLogedIn }) {
    
    const navigate = useNavigate()

    function handlerSubmit(event) {
        event.preventDefault()

        fetchUsers( "username", event.target[0].value)
        .then( users => {
            const user = users.filter( user => {
                return user.username === event.target[0].value;
            })
            console.log(user)

            if(user){
                setLogedIn(user)
                sessionStorage.setItem('logedIn', user)
                navigate('/home')
            }else{
                alert("User not found")
            }
        })
        .catch( e => {
            alert("User not found")
        })
    }

    function handleFocus (event) {
        event.target.select();
    }

    return (
        <section id="loginpage" className='page'>
            <section className='pageHeader'>
                <h2>Login</h2>
            </section>
            <section className="pageContent">
                <section className="formContainer">
                    <form className="form" onSubmit={handlerSubmit}>
                        <section className='formInputs'>
                            <label className="formLabel">Username</label>
                            <input className="formInput" onFocus={handleFocus} autoFocus placeholder='Username' required></input>
                            <label className="formLabel" >Password</label>
                            <input className="formInput"  type="password" onFocus={handleFocus} placeholder='Password' required></input>
                        </section>
                        <button id="login"  className="submitbt"  type="submit">Log In</button>
                        <Link  to='/signup'><button className='submitbt' >Sign Up</button></Link>
                    </form>
                </section>
            </section>
        </section>
    )
}

export default LoginPage;