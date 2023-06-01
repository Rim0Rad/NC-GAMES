import LikeButton from '../../LikeButton';

function CommentCard ( { comment }) {

    return (
        <section className="commentCard">
            <h4 id="commentowner">Comment by {comment.author}</h4>
            <p id="commentdate" className="date">{ new Date(comment.created_at).toUTCString()}</p>
            <p id="commentvotes">Votes: {comment.votes}</p>
            <p id="commentbody">{comment.body}</p>
            <LikeButton target={comment}/>
        </section>
    )
}

export default CommentCard;