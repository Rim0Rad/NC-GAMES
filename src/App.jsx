import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'
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
