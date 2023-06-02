import ReviewList from './ReviewList.jsx'
import ListParameters from './ListParameters.jsx'

import { useState } from 'react'

function MainPage () {

    const [ sortParameters, setSortParameters ] = useState({
        sort_by: 'created_at',
        order: 'DESC'
    })

    return (
        <section>
            <h2>""Main Page""</h2>
            <ListParameters setSortParameters={setSortParameters} sortParameters={sortParameters}/>
            <ReviewList sortParameters={sortParameters}/>
        </section>
    )
}

export default MainPage;