import { FormatAlignJustify } from '@mui/icons-material'
import { Box,Alert, Button, TextField } from '@mui/material'
import { flexbox } from '@mui/system'
import React from 'react'
import { NavLink } from 'react-router-dom'




export const Login = () => {
    const handleSubmit=(e)=>{
        e.preventDefault()  
        const data=new FormData(e.currentTaget)
        const data_pack={
            
            email:data.get('email'),
            password:data.get('password')
        }  
        console.log(data_pack)
    }
    return (
    <Box component='form' onSubmit={handleSubmit} noValidate sx={{ paddingTop:2}} id='login-form'>
    
      <TextField margin='normal' required fullWidth id='email' name='email' label="Email Address"/>
      <TextField margin='normal'  required fullWidth id='password' name='password' label="Password" type='password'/>
       <Box textAlign='center'>
      
        <Button sx={{mt:2,mb:2,px:5}} type='submit' variant='contained'>Login</Button>
      
       </Box>
       <NavLink to='/' >forgot pasword ?</NavLink>     
    </Box>
  )
}
