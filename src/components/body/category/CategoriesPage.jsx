import CategoryCard from './CategoryCard.jsx'
import { useState, useEffect } from 'react';
import { fetchCategories } from '../../../api/categories.js'

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
            <h2> All Cateories</h2>
            {categoriesList.map( category => {
                return <CategoryCard key={category.slug} category={category}/>
            })}
            
        </section>
    )
}

export default CategoriesPage;