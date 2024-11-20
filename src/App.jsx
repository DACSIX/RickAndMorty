import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css'
import Header from './components/Header/Header'
import Homepage from "./pages/HomePage/homepage";
import Humans from "./pages/Humans/humans";
import Aliens from "./pages/Aliens/aliens";
import Acerca from "./pages/Acerca/acerca";
import OneCharacter from './pages/Character/oneCharacter';

function App() {

  return (
    <Router>
    <div className='App'>
        <Header />
        <div className='parte'>
        <Routes>
          <Route path='/' element = {<Homepage/>}/>
          <Route path='/aliens' element = {<Aliens/>}/>
          <Route path='/humans' element = {<Humans/>}/>
          <Route path='/acerca' element = {<Acerca/>}/>
          <Route path='/personaje/:id' element = {<OneCharacter/>}/>
        </Routes>
        </div>
    </div>
    </Router>

  )
}

export default App
