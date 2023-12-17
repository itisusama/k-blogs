import React from 'react'
import './App.css'
import NavbarSection from './components/NavbarSection'
import HomePage from './components/HomePage'
// import {booksie_link, img_link} from './js/variables'

const App = () => {
  
  return (
    <div className='App'>
      <div className='content'>
        <NavbarSection/>
        <HomePage/>
      </div>
    </div>
  )
}

export default App
