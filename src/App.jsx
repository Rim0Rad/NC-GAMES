import './styling/App.css'
import './styling/Text.css'
import './styling/Header.css'
import './styling/Footer.css'
import './styling/ReviewCard.css'
import './styling/CommentCard.css'
import './styling/CategoryPage.css'
import './styling/ReviewsPage.css'

import Body from './components/body/Body.jsx'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'

import { useState } from 'react'

function App() {
  const [ logedIn, setLogedIn ] = useState ( sessionStorage.getItem('logedIn')
  ? sessionStorage.getItem('logedIn') : null)
  
  return (
    <main className='main'>
      <Header logedIn={logedIn} setLogedIn={setLogedIn}/>
      <Body logedIn={logedIn} setLogedIn={setLogedIn}/>
      <Footer/>
    </main>
  )
}

export default App
