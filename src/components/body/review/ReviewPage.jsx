import Review from './Review.jsx';
import LikeBar from './LikeBar.jsx';
import Comments from './comment/Comments.jsx'

function ReviewPage () {


    return (
        <section>
            <h2>""Review Page""</h2>
            <Review/>
            <LikeBar/>
            <Comments/>
        </section>
    )
}

export default ReviewPage;