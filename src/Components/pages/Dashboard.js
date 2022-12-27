import { Button, CssBaseline, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ResetPasswordForm } from './auth/ResetPasswordForm'
export const Dashboard = () => {
  const navigate=useNavigate()
  const handleLogout=()=>{
           
    navigate('/login')
  }
  return (
    <CssBaseline>  
      <Typography variant='h5' sx={{mb:10}}>Dashboard</Typography>
       <Grid container>  
          <Grid item sm={12} md={4}  sx={{backgroundColor:'gray',p:5,color:'white'}}>
            <Typography variant='h5' >Email:CECIL@gmail.com</Typography>
            <Typography variant='h6'>CECIL GHIMIRE</Typography>
            <Button variant='contained' color='warning'  sx={{mt:5}} onClick={handleLogout}>Logout</Button>
          </Grid>
             <Grid item sm={12} md={8}>
                <ResetPasswordForm/>
            </Grid>
       </Grid>
    </CssBaseline>
  )
}
