import ReviewList from './ReviewList.jsx'
import ListParameters from './ListParameters.jsx'

import { useState } from 'react'

function ReviewsPage () {

    const [ sortParameters, setSortParameters ] = useState({
        sort_by: 'created_at',
        order: 'DESC'
    })

    return (
        <section id="reviewPage">
            <section id="pageHeader">
                <h3 className="pageTitle">Latest Reviews</h3>
                <ListParameters setSortParameters={setSortParameters} sortParameters={sortParameters}/>
            </section>
            <ReviewList sortParameters={sortParameters}/>
        </section>
    )
}

export default ReviewsPage;