import Profile from './Profile.jsx';
import MainPage from './MainPage.jsx';
import LoginPage from './LoginPage.jsx';
import SignUpPage from './SignUpPage.jsx';
import ReviewPage from './ReviewPage.jsx';
import CategoryPage from './CategoryPage.jsx';
import TopReviewsPage from './TopReviews.jsx';
import PostReviewPage from './PostReviewPage.jsx';

import { Routes, Route } from 'react-router-dom'

function Body () {

    return (
        <section className="body">
            <h2>""Body""</h2>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/signup' element={<SignUpPage/>}/>
                <Route path='/review/:review_id' element={<ReviewPage/>}/>
                <Route path='/categories' element={<CategoryPage/>}/>
                <Route path='/newreview' element={<PostReviewPage/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/topreviews' element={<TopReviewsPage/>}/>
            </Routes>
        </section>
    )
}

export default Body;