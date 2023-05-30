

function SignUpPage () {

    return (
        <section>
            <h2>""Signup Page""</h2>
            <form>
                <label>
                    First Name
                    <input></input>
                </label>
                <label>
                    Last Name
                    <input></input>
                </label>
                <label>
                    User Name
                    <input></input>
                    
                </label>
                <label>
                    Password
                    <input></input>
                </label>
                <label>
                    Re-Enter Password
                    <input></input>
                </label>
                <label>
                    Email
                    <input required></input>
                </label>
                <label>
                    Avatar URL
                    <input></input>
                </label>
                <button>Submit</button>
                
            </form>
        </section>
    )
}

export default SignUpPage;