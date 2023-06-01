

function CommentCard ( { comment }) {
    return (
        <section className="commentCard">
            <h4 id="commentowner">Comment by {comment.author}</h4>
            <p id="commentdate" className="date">{ new Date(comment.created_at).toUTCString()}</p>
            <p id="commentvotes">Votes: {comment.votes}</p>
            <p id="commentbody">{comment.body}</p>
            <button id="votebuttons">
                <img id="upvoteimg" src='https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-upward-arrow-icon-png-image_925603.jpg'></img>
            </button>
        </section>
    )
}

export default CommentCard;