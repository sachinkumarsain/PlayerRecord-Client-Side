import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Home/Home'
import HeaderPlayer from './Header/HeaderPlayer'
import Admin from "./Admin/Admin"
import Certificate from './Certificate/Certificate'

function App() {
  return (
    <>
    <BrowserRouter>
    <HeaderPlayer/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/certificate' element={<Certificate/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App