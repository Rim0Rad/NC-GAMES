

function PostReviewPage () {

    return (
        <section>
            <h2>""Post a Review""</h2>
            <p>SignUpPage</p>
            <form>
                <label>
                    Title
                    <input></input>
                </label>
                <label>
                    Game Designer
                    <input></input>
                    
                </label>
                <label>
                    Image URL
                    <input></input>
                </label>
                <label>
                    Category
                    <input></input>
                </label>
                <label>
                    Review
                    <input required></input>
                    
                </label>
                <button>Submit</button>
                
            </form>
        </section>
    )
}

export default PostReviewPage;