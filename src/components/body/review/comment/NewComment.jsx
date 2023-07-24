import { postNewComment } from '../../../../api/comments.js'

function NewComment ( { commentList, setCommentList, logedIn, review_id } ) {

    function handleSubmit( event ) {
        event.preventDefault()

        const newComment = {
            body: event.target[0].value,
            author: logedIn.username,
            review_id: review_id,
            vote: 0,
            created_at: new Date().toUTCString(),
            comment_id: new Date().toUTCString()
        }

        postNewComment( newComment, review_id )
        .then(response => {
            setCommentList( [response.data.comment, ...commentList] )
        })
        .catch( err => {
            console.log( err )
        })
        event.target.reset()
    }

    if(logedIn){
        return (
            <section id="newCommentContainer">
                <h4>Post new Comment</h4>
                <form onSubmit={handleSubmit}>
                    <label>New Comment</label>
                    <input type="text" required></input>
                    <button type="submit"> Post </button>
                </form>
            </section>
    )
    }
    return (
        <section id="newCommentContainer">
            <h4>Login to post a comment.</h4>
        </section>
    )
}

export default NewComment;