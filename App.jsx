import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import PagenotFound from './Pages/PagenotFound'
import Login from './Pages/auth/Login'
import Register from './Pages/auth/Register'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  return (
    <>
     <BrowserRouter>
     <Routes> 
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/register' element={<Register/>}/>
     <Route path='*' element={<PagenotFound/>}/>
     
     </Routes>
     </BrowserRouter>
     <ToastContainer/>
    </>
  )
}

export default App
