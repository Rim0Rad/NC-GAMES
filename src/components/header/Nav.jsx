import { Link } from 'react-router-dom';

function Nav () {

    return (
        <section>
            <Link to='/'><button>Home</button></Link>
            <Link to='/categories'><button>Game Categories</button></Link>
            <Link to='/topreviews'><button>Top Reviews</button></Link>
            <Link to='/newreview'><button>New Review</button></Link>
        </section>
    )
}

export default Nav;