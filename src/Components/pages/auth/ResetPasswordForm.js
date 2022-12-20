import { CheckBox } from '@mui/icons-material'
import { Box,Alert, Button, TextField, Typography, FormControl, FormControlLabel, Grid } from '@mui/material'
import React, { useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'

export const ResetPasswordForm = () => {
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
            
            password:data.get('password'),
            password2:data.get('password2'),
        
        }  
        console.log(data_pack)
        if( data_pack.password===data_pack.password2){
            // console.log(data_pack)
    
            document.getElementById('regis-form').reset()
            seterrorMsg({
              status:false,
              msg:'Password Reset Succesfull',
              type:'',
           })
           navigate('/')
        }else{
             
       
          seterrorMsg({
            status:true,
            msg:'Password should match',
            type:'',
         })
         
          }
             
            
         }
      return (
       <>
        <Grid container justifyContent='center'>
            <Grid item sm={6} xs={12}  textAlign='center'>
                <Typography variant="h6" component="h2" sx={{mt:5}}>Password Reset</Typography>
            
                <Box component='form' onSubmit={handleSubmit} noValidate sx={{ paddingTop:2}} id='password-form'>
                <TextField margin='normal'  required fullWidth id='password' name='password' label="Password" type='password'/>
                <TextField margin='normal'  required fullWidth id='password2' name='password2' label="Re-enter Password" type='password'/>
                
                <Box textAlign='center'>
                
                    <Button sx={{mt:2,mb:2,px:5}} type='submit' variant='contained'>Reset Password</Button>
                
                </Box>
                
                
                </Box>
                </Grid>
            </Grid>
        </>
      )}
