import CommentCard from './CommentCard.jsx'

function CommentList () {

    return (
        <section>
            <h3>Comments</h3>
            <ul>
                <CommentCard/>
                <CommentCard/>
            </ul>
        </section>
    )
}

export default CommentList;