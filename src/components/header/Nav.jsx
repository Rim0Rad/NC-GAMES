import { Link } from 'react-router-dom';

function Nav () {

    return (
        <section id="navbar" className='navbar'>
            <Link to='/'><button id="homebt">Home</button></Link>
            <Link to='/categories'><button id="categoriesbt">Game Categories</button></Link>
            <Link to='/topreviews'><button id="toprevbt">Top Reviews</button></Link>
            <Link to='/newreview'><button id="newrevbt">New Review</button></Link>
        </section>
    )
}

export default Nav;