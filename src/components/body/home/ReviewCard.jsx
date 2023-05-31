import { Link } from 'react-router-dom'

function ReviewCard ( { review }) {

    return (
        <Link className="link" to={`/reviews/${review.review_id}`}>
            <section className="reviewCard">
                <img id="reviewCardImg" src={review.review_img_url}></img>
                <h4 id="reviewCardTitle">{review.title}</h4>
                <h5 id="reviewCardAuthor">by {review.owner}</h5>
                <p id="reviewCardBody">{review.review_body.substr(0,100) + "..."}</p>
                <section id="intereactions">
                    <p id="reviewCardVotes">Votes: {review.votes}</p>
                    <p id="reviewCardCommentCount">Comments: {review.comment_count}</p>
                </section>
            </section>
        </Link>
        )
}

export default ReviewCard;