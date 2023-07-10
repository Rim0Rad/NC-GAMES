
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Header ( { logedIn, setLogedIn }) {

    useEffect( () =>{}, [ logedIn ])


    function handleLogOut(event) {
        setLogedIn({username:false})
        sessionStorage.removeItem('logedIn')
    }

    return (
        <section className="header">
            <section>
                <h1 id="mainTitle">Board Game Reviews</h1>
            </section>
            <section id="buttonsBar">
                <section id="navBar">
                    <Link to='/home'><button id="homebt" className='navButton navButtonLeft'>Home</button></Link>
                    <Link to='/reviews'><button id="homebt" className='navButton'>Reviews</button></Link>
                    <Link to='/categories'><button id="categoriesbt" className='navButton'>Categories</button></Link>
                    <Link to='/topreviews'><button id="toprevbt" className='navButton'>Top Reviews</button></Link>
                    <Link to='/newreview'><button id="newrevbt" className='navButton navButtonRight'>New Review</button></Link>
                </section>
                <section className="loginBar">
                        { logedIn ? 
                            <section> 
                                <Link to='/profile'> <h2>{logedIn.username}</h2></Link> 
                                <Link to='/'><button onClick={handleLogOut}>Log Out</button></Link> 
                            </section>
                            :<Link to='/login'><button id="loginbt">Login</button></Link>
                        }
                </section>
            </section>
        </section>
    )
}

export default Header;