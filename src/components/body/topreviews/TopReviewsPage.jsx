import ReviewList from '../reviews/ReviewList.jsx'

function TopReviewsPage () {

    return (
        <section>
            <section className='pageHeader'>
                <h2>Top Reviews</h2>
            </section>
            <ReviewList sortParameters={{sort_by: "votes", order: "DESC"}}/>
        </section>
    )
}

export default TopReviewsPage;