import { Link } from 'react-router-dom'

function CategoryCard ( { category }) {

    return (
        <Link to={`/categories/${category.slug}`} className="link">
            <section id="categoryCard">
                {/* TODO: implement category img into DB to display */}
                <img></img> 
                <h4>{category.slug.toUpperCase()}</h4>
                <p>{category.description}</p>
            </section>
        </Link>
    )
}

export default CategoryCard;