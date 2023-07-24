import ReviewList from './ReviewList.jsx'
import ListParameters from './ListParameters.jsx'

import { useState } from 'react'

function ReviewsPage () {

    const [ sortParameters, setSortParameters ] = useState({
        sort_by: 'created_at',
        order: 'DESC'
    })

    return (
        <section className="page">
            <section className="pageHeader">
                <p className="pageTitle">Latest Reviews</p>
                <ListParameters setSortParameters={setSortParameters} sortParameters={sortParameters}/>
            </section>
            <section className='pageContent'>
                <ReviewList sortParameters={sortParameters}/>
            </section>
        </section>
    )
}

export default ReviewsPage;