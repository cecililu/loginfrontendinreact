import { Box,Alert, Button, TextField, Typography, Grid } from '@mui/material'
import React, { useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'

export const SendPasswordResetEmail = () => { const [errorMsg, seterrorMsg] = useState({
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
       
    }  
    console.log(data_pack)
    if(data_pack.email ){
        // console.log(data_pack)
        document.getElementById('login-form').reset()
        seterrorMsg({
          status:false,
          msg:'Email Sent',
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
<Grid container justifyContent='center'>
    <Grid item sm={6} xs={12}  textAlign='center'>
        <Typography variant="h6" component="h2" sx={{mt:5}}>Password Reset</Typography>
     <Box component='form' onSubmit={handleSubmit} noValidate sx={{ paddingTop:1}} id='login-form'>
     <TextField sx={{mx:2}} margin='normal' required fullWidth id='email' name='email' label="Email Address"/>
     
     {errorMsg.msg ? <Alert sx={{mx:3}} severity={errorMsg.status ?'error':'success'}>{errorMsg.msg}</Alert>:'' }
     <Box textAlign='center'>
    
    <Button sx={{mt:2,mb:2,px:5}} type='submit' variant='contained'>Send Email</Button>
  
   </Box>
   
  
</Box>
    </Grid>
</Grid>
)
}
