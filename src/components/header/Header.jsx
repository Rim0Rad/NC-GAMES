
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Header ( { logedIn, setLogedIn }) {

    useEffect( () =>{}, [ logedIn ])


    function handleLogOut(event) {
        setLogedIn(null)
        sessionStorage.removeItem('logedIn')
    }

    return (
        <section className="header">
                <h1 id="mainTitle">Board Game Reviews</h1>
                <section id="navBar">
                    <Link to='/home'><button id="homebt" className='navButton navButtonLeft'>Home</button></Link>
                    <Link to='/reviews'><button id="homebt" className='navButton'>Reviews</button></Link>
                    <Link to='/categories'><button id="categoriesbt" className='navButton'>Categories</button></Link>
                    <Link to='/topreviews'><button id="toprevbt" className='navButton'>Top Reviews</button></Link>
                    <Link to='/newreview'><button id="newrevbt" className='navButton navButtonRight'>New Review</button></Link>
                </section>
                { logedIn ? 
                    <section className="loginBar"> 
                        {/* <section id="prifileLinkContainer"> */}
                            <Link className="link" to='/profile'>
                                <img className="avtarImgLogoMedium" src={logedIn[0].avatar_url}/>
                                <h2 className='usernameLink'>{logedIn[0].username}</h2>
                            </Link> 
                        {/* </section> */}
                            <Link to='/home'><button id="logoutbt" onClick={handleLogOut}>Log Out</button></Link> 
                    </section>
                    : <section className="loginBar">
                        <Link to='/login'><button id="loginbt">Login</button></Link>
                      </section>
                }
        </section>
    )
}

export default Header;