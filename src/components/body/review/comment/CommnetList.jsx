import CommentCard from './CommentCard.jsx'

function CommentList ( { commentList, logedIn, setCommentList }) {

    

    return (
        <section>
            {commentList.map( comment => {
                return <CommentCard key={comment.comment_id} comment={comment} commentList={commentList} setCommentList={setCommentList} logedIn={logedIn}/>
            })}
        </section>
    )
}

export default CommentList;