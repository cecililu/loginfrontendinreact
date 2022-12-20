import { CheckBox } from '@mui/icons-material'
import { Box,Alert, Button, TextField, Typography, FormControl, FormControlLabel } from '@mui/material'
import React, { useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'

export const Registration = () => {
  const [errorMsg, seterrorMsg] = useState({
    status:null,
    msg:'',
    type:'',
 })
 const navigate=useNavigate()
 const handleSubmit=(e)=>{
    e.preventDefault()  
    const data=new FormData(e.currentTarget)
    const data_pack={
        
        email:data.get('email'),
        name:data.get('name'),
        password:data.get('password'),
        password2:data.get('password2'),
        tc:data.get('tc')
    }  
    console.log(data_pack)
    if(data_pack.tc&&data_pack.email && data_pack.password && data_pack.password2 && data_pack.name && data_pack.password===data_pack.password2){
        // console.log(data_pack)

        document.getElementById('regis-form').reset()
        seterrorMsg({
          status:false,
          msg:'Registation Succesful',
          type:'',
       })
       navigate('/')
    }else{
         
    if (data_pack.password===data_pack.password2){
      seterrorMsg({
        status:true,
        msg:'All fields are required',
        type:'',
     })}else{
      seterrorMsg({
        status:true,
        msg:'Password should match',
        type:'',
     })
     }
      }
         
        
     }
  return (
   <>
   
     <Box component='form' onSubmit={handleSubmit} noValidate sx={{ paddingTop:2}} id='regis-form'>
     <TextField margin='normal' required fullWidth id='email' name='email' label="Email Address"/>
      <TextField margin='normal' required fullWidth id='name' name='name' label="Name"/>
      <TextField margin='normal'  required fullWidth id='password' name='password' label="Password" type='password'/>
      <TextField margin='normal'  required fullWidth id='password2' name='password2' label="Re-enter Password" type='password'/>
       <FormControlLabel sx={{m:1}} label='I agree all the terms and conditions' control={<CheckBox value='agree' color='primary' name='tc' id='tc' />}></FormControlLabel>
       {errorMsg.msg ? <Alert severity={errorMsg.status ?'error':'success'}>{errorMsg.msg}</Alert>:'' }
       
       <Box textAlign='center'>
      
        <Button sx={{mt:2,mb:2,px:5}} type='submit' variant='contained'>Login</Button>
      
       </Box>
     
      
    </Box>
   </>
  )
}
