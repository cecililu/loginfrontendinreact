import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
      <Box sx={{flexGrow:1,
               }}>
        <AppBar position='static' style={{backgroundColor:'green'}}>
            <Toolbar>
                <Typography variant='h5' component='div' sx={{flexGrow:1}}>
                    Cilkicks
                </Typography>
                
                <Button component={NavLink} to='/' style={({isActive})=>{
                                                             return {backgroundColor: isActive?'red':''}}} 
                sx={{color:'white',textTransform:'none'}}>Home</Button>
                <Button component={NavLink} to='/contact' style={({isActive})=>{
                                                                return {backgroundColor: isActive?'red':''}}} 
                sx={{color:'white',textTransform:'none'}}>Contact US</Button>
                 <Button component={NavLink} to='/login' style={({isActive})=>{
                                                                return {backgroundColor: isActive?'red':''}}} 
                sx={{color:'white',textTransform:'none'}}>Login Register</Button>
            </Toolbar>
        </AppBar>
      
      </Box>
    </>
  )
}
