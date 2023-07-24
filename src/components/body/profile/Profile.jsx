import ReviewList from '../reviews/ReviewList.jsx'
import CommentList from '../review/comment/CommnetList.jsx'
import ProfileDetails from './ProfileDetails.jsx'

function Profile () {

    

    return (
        <section>
            <h2>""Profile""</h2>
            <ProfileDetails/>
            {/* <ReviewList/> // add a list of posted reviews*/}
            {/* <CommentList/> // add a list most recent comments */}
        </section>
    )
}

export default Profile;