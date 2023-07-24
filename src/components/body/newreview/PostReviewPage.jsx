

function PostReviewPage () {



    return (
        <section id="postreviewpage">
            <section className="pageHeader">
                <h2>Post a Review</h2>
            </section>

            <section className="pageContent">
                    <section className="formContainer">
                        <form className="form">
                            <label className="formLabel">Title <a className="reqStar">*</a></label>
                                <input className="formInput" placeholder="Review Title" autoFocus required></input>
                            <label className="formLabel">Game Designer <a className="reqStar">*</a></label>
                                <input className="formInput" placeholder="Game Designer" required></input>
                            <label className="formLabel">Image <a className="reqStar">*</a></label>
                                <input className="formInput" placeholder="URL" required></input>
                            <label className="formLabel">Category <a className="reqStar">*</a></label>
                                <input className="formInput" placeholder="Game's Category" required></input>
                            <label className="formLabel">Review <a className="reqStar">*</a></label>
                                <textarea className="formInput textbox" spellCheck="true"placeholder="Review goes here..." required></textarea>
                            <button id="postReview" className='submitbt'>Submit</button>
                        </form> 
                    </section>
            </section>

        </section>
    )
}

export default PostReviewPage;