

function PostReviewPage () {

    return (
        <section id="postreviewpage">
            <h2>Post a new Review</h2>
            <form id="postreviewform">
                <section id="postreviewinputs">
                    <label className="postreviewlabel">Title <a className="reqStar">*</a></label>
                        <input className="postreviewinput" placeholder="Review Title" autoFocus required></input>
                    <label className="postreviewlabel">Game Designer <a className="reqStar">*</a></label>
                        <input className="postreviewinput" placeholder="Game Designer" required></input>
                    <label className="postreviewlabel">Image <a className="reqStar">*</a></label>
                        <input className="postreviewinput" placeholder="URL" required></input>
                    <label className="postreviewlabel">Category <a className="reqStar">*</a></label>
                        <input className="postreviewinput" placeholder="Game's Category" required></input>
                    <label className="postreviewlabel">Review <a className="reqStar">*</a></label>
                        <textarea className="postreviewinput textbox" spellCheck="true" placeholder="Review goes here..." required></textarea>
                </section> 
                <button>Submit</button>
                
            </form>
        </section>
    )
}

export default PostReviewPage;