import Profile from './profile/Profile.jsx';
import MainPage from './home/MainPage.jsx';
import LoginPage from './login/LoginPage.jsx';
import SignUpPage from './signup/SignUpPage.jsx';
import ReviewPage from './review/ReviewPage.jsx';
import CategoryPage from './category/CategoryPage.jsx';
import TopReviewsPage from './topreviews/TopReviewsPage.jsx';
import PostReviewPage from './newreview/PostReviewPage.jsx';

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