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
        <section className='page'>
            <section className='pageHeader'>
                <h2> All Cateories</h2>
            </section>
            <secption className="pageContent">
                {categoriesList.map( category => {
                    return <CategoryCard key={category.slug} category={category}/>
                })}
            </secption>
            
        </section>
    )
}

export default CategoriesPage;