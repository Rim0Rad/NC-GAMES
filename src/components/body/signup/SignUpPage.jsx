

function SignUpPage () {

    return (
        <section id="signuppage">
            <section className="pageHeader">
                <h2>Sign Up</h2>
            </section>
            <section className="pageContent">
                <section className="formContainer">
                    <form className="form">
                        <label for="firstname" className="formLabel">First Name</label>
                            <input id="firstname" className="formInput" autoFocus></input>
                        <label className="formLabel">Last Name</label>
                            <input className="formInput"></input>
                        <label className="formLabel">Username <a className="reqStar">*</a></label>
                            <input className="formInput" required></input>
                        <label className="formLabel">Password <a className="reqStar">*</a></label>
                            <input className="formInput" required></input>
                        <label className="formLabel">Re-Enter Password <a className="reqStar">*</a></label>
                            <input className="formInput" required></input>
                        <label className="formLabel">Email</label>
                            <input className="formInput"></input>
                        <label className="formLabel">Avatar URL</label>
                            <input className="formInput"></input>
                        <button id="signup" className="submitbt">Submit</button>
                    </form>
                </section>
            </section>
        </section>
    )
}

export default SignUpPage;