import LikeButton from '../../LikeButton';
import { deleteComment } from '../../../../api/comments.js'

function CommentCard ( { comment, logedIn, commentList, setCommentList }) {

    function handleClick () {
        const newCommentList = [... commentList]
        newCommentList.splice(newCommentList.indexOf(comment),1)
        setCommentList(newCommentList)
        deleteComment(comment.comment_id)
    }

    return (
        <section className="commentCard">
            <h4 id="commentowner">Comment by {comment.author}</h4>
            <p id="commentdate" className="date">{ new Date(comment.created_at).toUTCString()}</p>
            <p id="commentvotes">Votes: {comment.votes}</p>
            <p id="commentbody">{comment.body}</p>
            <LikeButton target={comment} logedIn={logedIn}/>
            { logedIn.username ===  comment.author && <button id="deletecommentbt" onClick={handleClick}>
                <b>X</b>
            </button> }
        </section>
    )
}

export default CommentCard;