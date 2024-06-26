import React from 'react'
import {Link} from 'react-router-dom'
import {Stack} from '@mui/material'
import Logo from '../assets/images/Logo.png'
import fit from '../assets/images/fit.png'

const Navbar = () => {
  return (
    <Stack direction="row"
            justifyContent="space-around" sx={{gap:{sm:'122px',xs: '40px'},mt: {sm:'32px', xs:'20px'},justifyContent:'none' }} px="20px">
        <Link to="/">
          <img src={fit} alt="logo" style={{width: '48px', height: '48px',margin:'0 20px'}} />
        </Link>
          <Stack
              direction="row"
              gap="40px"
              fontSize="24px"
              alignItems="fles-end">
          <Link to="/" style={{textdecoration:'none',color:"#3A1212",borderBottom:'3px solid #FF2625'}}>
            Home
          </Link>
          <a href="#about" style={{textDecoration:'none',color:'#3A1212'}}>About</a>
          <a href="/home" style={{textDecoration:'none',color:'#3A1212'}}>Exercises</a>
          <a href="/contact" style={{textDecoration:'none',color:'#3A1212'}}>Contact Us</a>
          <a href="/openai" style={{textDecoration:'none',color:'#3A1212'}}>OpenAI</a>
          <a href="/signin" style={{textDecoration:'none',color:'#3A1212'}}>Sign In</a>
          <a href="/signup" style={{textDecoration:'none',color:'#3A1212'}}>Sign Up</a>
          </Stack>

    </Stack>
  )
}

export default Navbar
