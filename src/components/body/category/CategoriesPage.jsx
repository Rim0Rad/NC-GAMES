import CategoryCard from './CategoryCard.jsx'
import { useState, useEffect } from 'react';
import { fetchCategories } from '../../../api/categories.js'
import { Routes, Route } from 'react-router-dom'
import CategoryPage from './CategoryPage.jsx'

function CategoriesPage () {

    const [ categoriesList, setCategoriesList ] = useState([])

    useEffect(() => {
        fetchCategories()
        .then(categories => {
            setCategoriesList(categories)
            
        })
    },[])

    return (
        <section>
            <h2>""Categories""</h2>
            {categoriesList.map( category => {
                return <CategoryCard key={category.slug} category={category}/>
            })}
            
        </section>
    )
}

export default CategoriesPage;