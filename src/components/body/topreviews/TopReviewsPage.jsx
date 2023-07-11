import ReviewList from '../reviews/ReviewList.jsx'

function TopReviewsPage () {

    return (
        <section>
            <h2>Top Reviews Page</h2>
            <ReviewList sortParameters={{sort_by: "votes", order: "DESC"}}/>
        </section>
    )
}

export default TopReviewsPage;