import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {  BrowserRouter, Routes,  Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import './index.css'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
       <Routes>

       <Route path='/' exact element={<Home/>} />
       <Route path='/About' exact element={<About/>} />
       <Route path='/Services' exact element={<Services/>} />
       <Route path='/Contact' exact element={<Contact/>} />
       <Route path='*/' />
       </Routes>
       <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
