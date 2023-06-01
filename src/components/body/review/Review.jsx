import ReviewInfo from './Reviewinfo.jsx';
import ReviewBody from './ReviewBody.jsx';
import ReviewImage from './ReviewImage.jsx';



function Review ( { review }) {
    
    return (
        <section>
            <ReviewInfo title={review.title} created_at={review.created_at} owner={review.owner} category={review.category} designer={review.designer}/>
            <ReviewImage img_url={review.review_img_url}/>
            <ReviewBody body={review.review_body}/>
        </section>
    )
}

export default Review;