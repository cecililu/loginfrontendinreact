import { Button, CssBaseline, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
  const navigate=useNavigate()
  const handleLogout=()=>{
           
    navigate('/login')
  }
  return (
    <CssBaseline>
       
       <Grid container>
          <Grid item sm={6} md={4}  sx={{backgroundColor:'gray',p:5,color:'white'}}>
            <Typography variant='h5' >Email:CECIL@gmail.com</Typography>
            <Typography variant='h6'>CECIL GHIMIRE</Typography>
            <Button variant='contained' color='warning'  sx={{mt:5}} onClick={handleLogout}>Logout</Button>
          </Grid>
            <Grid item sm={6} md={4}>
                 
            </Grid>
       </Grid>
    </CssBaseline>
  )
}
