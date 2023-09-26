import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'

import './Style.css'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/login' element={<Login/>}/>
      {/* <Route exact path='/' element={<NetFlix/>}/> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App
