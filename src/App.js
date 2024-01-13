import React from 'react'
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom"
import Home from "./components/Home.jsx"
import Footer from "./components/Footer.jsx"
const App = () => {
  return  ( 
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Footer/>
  </Router>
    )
  
}

export default App
