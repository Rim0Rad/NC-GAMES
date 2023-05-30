import ReviewCard from './ReviewCard.jsx';

function ReviewList () {


    return (
        <section>
            <h3>Reviews</h3>
            <section>
                <ul>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                </ul>
            </section>
        </section>
    )
}

export default ReviewList;