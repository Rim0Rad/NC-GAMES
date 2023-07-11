

function SignUpPage () {

    return (
        <section id="signuppage">
            <h2>Sign Up</h2>
            <section>
                <form id="signupform">
                    <section id="signupinputs">
                        <label for="firstname" className="signupformlabel">First Name</label>
                            <input id="firstname" className="signupforminput" autoFocus></input>
                        <label className="signupformlabel">Last Name</label>
                            <input className="signupforminput"></input>
                        <label className="signupformlabel">Username <a className="reqStar">*</a></label>
                            <input className="signupforminput" required></input>
                        <label className="signupformlabel">Password <a className="reqStar">*</a></label>
                            <input className="signupforminput" required></input>
                        <label className="signupformlabel">Re-Enter Password <a className="reqStar">*</a></label>
                            <input className="signupforminput" required></input>
                        <label className="signupformlabel">Email</label>
                            <input className="signupforminput"></input>
                        <label className="signupformlabel">Avatar URL</label>
                            <input className="signupforminput"></input>
                    </section>
                    <button id="signupsubmit">Submit</button>
                </form>
            </section>
        </section>
    )
}

export default SignUpPage;