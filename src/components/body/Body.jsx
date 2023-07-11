import Profile from './profile/Profile.jsx';
import HomePage from './main/HomePage.jsx';
import LoginPage from './login/LoginPage.jsx';
import ReviewPage from './review/ReviewPage.jsx';
import SignUpPage from './signup/SignUpPage.jsx';
import ReviewsPage from './reviews/ReviewsPage.jsx';
import CategoryPage from './category/CategoryPage.jsx';
import CategoriesPage from './category/CategoriesPage.jsx';
import PostReviewPage from './newreview/PostReviewPage.jsx';
import TopReviewsPage from './topreviews/TopReviewsPage.jsx';

import { Routes, Route } from 'react-router-dom'
import { fetchCategories } from '../../api/categories.js';
import { useState, useEffect } from 'react'

function Body ( { logedIn, setLogedIn }) {

    const [ categoriesList, setCategoriesList ] = useState([])

    useEffect(() => {
        fetchCategories()
        .then(categories => {
            setCategoriesList(categories)
            
        })
    },[])


    return (
        <section className="body">
            <Routes>
                <Route path='/home' element={<HomePage/>}/>
                <Route path='/reviews' element={<ReviewsPage/>}/>

                <Route path='/login' element={<LoginPage setLogedIn={setLogedIn} logedIn={logedIn}/>}/>
                <Route path='/signup' element={<SignUpPage/>}/>
                <Route path='/reviews/:review_id' element={<ReviewPage logedIn={logedIn}/>}/>
                <Route path='/categories/' element={<CategoriesPage/>}/>
                {categoriesList.map( category => {
                    return <Route key={category.slug} path={`/categories/${category.slug}`} element={<CategoryPage category={category}/>}></Route>
                })}
                <Route path='/newreview' element={<PostReviewPage/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/topreviews' element={<TopReviewsPage/>}/>
                <Route path='/categories/*' element={<h2>We don't play these kind of games here...</h2>}/>
                <Route path='/*' element={<h2>You're not in Kansas anymore...</h2>}/>
                {/* <Route path='/users/:user_id' element={<Profile/>}/>  TODO: backend endpoint for users by id, usersProfile witht no acces to their settings*/}
            </Routes>
        </section>
    )
}

export default Body;