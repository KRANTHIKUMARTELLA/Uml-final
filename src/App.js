import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom' // Added import statement for BrowserRouter
import { Box } from '@mui/material'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ContactUs from './pages/ContactUs'
import SignIn from './pages/SignIn'
import Registar from './pages/Registar'
import SignUp from './pages/SignUp'
import OpenAI from './pages/OpenAI'


const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/registar" element={<Registar />} />
          <Route path="/openai" element={<OpenAI />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
      <Footer />
      
    </Box>
  )
}

export default App
