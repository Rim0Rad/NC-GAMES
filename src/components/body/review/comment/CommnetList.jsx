import CommentCard from './CommentCard.jsx'

function CommentList ( { commentList }) {

    return (
        <section>
            {commentList.map( comment => {
                return <CommentCard key={comment.comment_id} comment={comment}/>
            })}
        </section>
    )
}

export default CommentList;