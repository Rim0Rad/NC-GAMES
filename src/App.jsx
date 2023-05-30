import Header from './components/header/Header.jsx'
import Body from './components/body/Body.jsx'
import Footer from './components/footer/Footer.jsx'
import './App.css'
import { useState } from 'react'

function App() {

  return (
    <main className='main'>
      <Header/>
      <Body/>
      <Footer/>
    </main>
  )
}

export default App
