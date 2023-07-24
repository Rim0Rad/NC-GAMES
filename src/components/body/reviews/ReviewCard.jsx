import { Link } from 'react-router-dom';

function ReviewCard ( { review }) {

    return (
        <Link className="link" to={`/reviews/${review.review_id}`}>
            <section className="reviewCard">
                <section className='reviewImgContainer'>
                    <img id="reviewCardImg" src={review.review_img_url}></img>
                </section>
                <section id="reviewDetailsContainer"className='sectionColumn'>
                    <section id="reviewCardBodyContainer" className='sectionRow spaced'>
                        <section id="reviewCardTitleContainer">
                            <h3 id="reviewCardTitle">{review.title}</h3>
                            <h5 id="reviewCardAuthor">by {review.owner} <br/>
                            {new Date(review.created_at).toUTCString()}</h5>
                        </section>
                        <section>
                            <p id="reviewCardVotes">Votes: {review.votes}</p>
                            <p id="reviewCardCommentCount">Comments: {review.comment_count}</p>
                        </section>
                    </section>
                    <section id="reviewCardBodyContainer">
                        <p id="reviewCardBody">{review.review_body.substr(0,100) + "..."}</p>
                    </section>
                </section>
            </section>
        </Link>
        )
}

export default ReviewCard;