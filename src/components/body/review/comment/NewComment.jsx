import { useState } from 'react';

function NewComment ( {commentList, setCommentList, user} ) {

    // const [ newComment, setNewComment ] = useState( {
    //     body: "",
    //     votes: 0,
    //     author: ""
    // })

    // function handleSubmit( event ) {
    //     event.preventDefault()
    //     event.target.reset()
    //     setCommentList([newComment, ...commentList])
    // }

    return (
        <section>
            <h4>Post new Comment</h4>
            {/* <form onSubmit={handleSubmit}>
                <label>New Comment</label>
                <input type="text"></input>
                <button type="submit"> Post </button>
            </form> */}
        </section>
    )
}

export default NewComment;