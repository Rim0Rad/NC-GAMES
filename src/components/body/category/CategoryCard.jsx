import { Link } from 'react-router-dom'

function CategoryCard ( { category }) {

    return (
        <Link to={`/categories/${category.slug}`}>
            <section id="categorycard">
                {/* TODO: implement category img into DB to display */}
                <img></img> 
                <h4>{category.slug}</h4>
                <p>{category.description}</p>
            </section>
        </Link>
    )
}

export default CategoryCard;