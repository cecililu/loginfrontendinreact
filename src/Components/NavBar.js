import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
      <Box sx={{flexGrow:1,
                backgroundColor: 'primary.dark',}}>
        <AppBar position='static' color='secondary'>
            <Toolbar>
                <Typography variant='h5' component='div' sx={{flexGrow:1}}>
                    Cilkicks
                </Typography>
                
                <Button component={NavLink} to='/' style={({isActive})=>{
                                                             return {backgroundColor: isActive?'red':''}}} 
                sx={{color:'white'}}>Home</Button>
                <Button component={NavLink} to='/contact' style={({isActive})=>{
                                                                return {backgroundColor: isActive?'red':''}}} 
                sx={{color:'white'}}>Contact US</Button>
           
            </Toolbar>
        </AppBar>
      
      </Box>
    </>
  )
}
