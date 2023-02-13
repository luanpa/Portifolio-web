import React,{Fragment} from 'react'
import "./App.css"
import {Route,Routes} from "react-router-dom"
import Home from './Component/Home'
import About from './Component/About'
import Portifolio from './Component/Portifolio'

function App() {
  return (
    <Fragment>

  <Routes>
          <Route extact path='/' element = { <Home/>}/>
          <Route extact path='/about' element = { <About/>}/>
          <Route extact path='/Portifolio' element = { <Portifolio/>}/>
  </Routes>
    
    </Fragment>
  )
}

export default App