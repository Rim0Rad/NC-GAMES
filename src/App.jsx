import './App.css'
import Body from './components/body/Body.jsx'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'

import { useState } from 'react'

function App() {
  const [ logedIn, setLogedIn ] = useState ( sessionStorage.getItem('logedIn') ? {username: sessionStorage.getItem('logedIn')} : { username: false})

  return (
    <main className='main'>
      <Header logedIn={logedIn} setLogedIn={setLogedIn}/>
      <Body logedIn={logedIn} setLogedIn={setLogedIn}/>
      <Footer/>
    </main>
  )
}

export default App
