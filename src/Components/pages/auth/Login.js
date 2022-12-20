import { FormatAlignJustify } from '@mui/icons-material'
import { Box,Alert, Button, TextField, Typography } from '@mui/material'
import { flexbox } from '@mui/system'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


export const Login = () => {
     const [errorMsg, seterrorMsg] = useState({
        status:null,
        msg:'',
        type:'',
     })
     const handleSubmit=(e)=>{
        e.preventDefault()  
        const data=new FormData(e.currentTarget)
        const data_pack={
            
            email:data.get('email'),
            password:data.get('password')
        }  
        console.log(data_pack)
        if(data_pack.email && data_pack.password){
            // console.log(data_pack)
            document.getElementById('login-form').reset()
            seterrorMsg({
              status:false,
              msg:'Login Success',
              type:'',
           })
        }else{
             seterrorMsg({
              status:true,
              msg:'All fields are required',
              type:'',
           })
            
        }
        
    
    }
    return (
    <Box component='form' onSubmit={handleSubmit} noValidate sx={{ paddingTop:2}} id='login-form'>
    
      <TextField margin='normal' required fullWidth id='email' name='email' label="Email Address"/>
      <TextField margin='normal'  required fullWidth id='password' name='password' label="Password" type='password'/>
      <Alert severity={errorMsg.status ?'error':'success'}>{errorMsg.msg}</Alert> 
       <Box textAlign='center'>
      
        <Button sx={{mt:2,mb:2,px:5}} type='submit' variant='contained'>Login</Button>
      
       </Box>
       <NavLink to='/' >forgot pasword ?</NavLink>
      
    </Box>
  )
}
