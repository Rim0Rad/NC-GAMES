import { postNewComment } from '../../../../api/comments.js'

function NewComment ( { commentList, setCommentList, logedIn, review_id } ) {

    function handleSubmit( event ) {
        event.preventDefault()
        const newComment = {
            body: event.target[0].value,
            username: logedIn.username, //TODO: should have the user in database 
            review_id: review_id,
            vote: 0,
            created_at: new Date().toUTCString()
        }

        setCommentList([newComment, ...commentList])
        
        postNewComment(newComment, review_id)
        .then(response => {
            console.log(resposne)
        })
        .catch( err => {
            console.log(err.response.data)
        })
        event.target.reset()
    }

    if(logedIn.username){
        return (
            <section>
            <h4>Post new Comment</h4>
            <form onSubmit={handleSubmit}>
                <label>New Comment</label>
                <input type="text"></input>
                <button type="submit"> Post </button>
            </form>
        </section>
    )
    }
    return (
        <p>Login to post a comment.</p>
    )
}

export default NewComment;