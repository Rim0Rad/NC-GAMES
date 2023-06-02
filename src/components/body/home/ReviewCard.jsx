import { Link } from 'react-router-dom'

function ReviewCard ( { review }) {

    return (
        <Link className="link" to={`/reviews/${review.review_id}`}>
            <section className="reviewCard">
                <img id="reviewCardImg" src={review.review_img_url}></img>
                <h3 id="reviewCardTitle">{review.title}</h3>
                <h5 id="reviewCardAuthor">by {review.owner} <br/>
                {new Date(review.created_at).toUTCString()}</h5>
                <p id="reviewCardBody">{review.review_body.substr(0,100) + "..."}</p>
                <p id="reviewCardDate"></p>
                <section id="intereactions">
                    <p id="reviewCardVotes">Votes: {review.votes}</p>
                    <p id="reviewCardCommentCount">Comments: {review.comment_count}</p>
                </section>
            </section>
        </Link>
        )
}

export default ReviewCard;