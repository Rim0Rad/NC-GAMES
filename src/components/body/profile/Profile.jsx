import ReviewList from '../home/ReviewList.jsx'
import CommentList from '../review/comment/CommnetList.jsx'
import ProfileDetails from './ProfileDetails.jsx'

function Profile () {

    return (
        <section>
            <h2>""Profile""</h2>
            <ProfileDetails/>
            <ReviewList/>
            <CommentList/>
        </section>
    )
}

export default Profile;