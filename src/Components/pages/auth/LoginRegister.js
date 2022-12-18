import { Card, Grid, Tabs, Typography,Box ,Tab } from '@mui/material'
import image from '../../../images/car.png'
import React from 'react'

export const LoginRegister = () => {
  return (
    <>
      <Grid container sx={{height:'90vh'}}>
    
        <Grid item lg={7} sm={5} 
                sx={{
                    backgroundImage:`url(${image})`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover',
                    backgroundPosition:'center'
                    }}> 
           
        </Grid>
        <Grid item lg={5} sm={7} 
                sx={{
                   
                    }}> 
                
            <Card sx={{width:'100%',height:'100%',backgroundColor:'white'}}>
                <Box>
                    <Box sx={{borderTop:1,borderBottom:1,borderColor:'divider'}}> 
                        <Tabs> 
                            <Tab label="Login" sx={{textTransform:'none',fontWeight:'bold'}}></Tab>
                            <Tab label="Registrations"  sx={{textTransform:'none',fontWeight:'bold'}}></Tab>      
                        </Tabs>
                    </Box>
                </Box>
                </Card>
        </Grid>
      </Grid>
    </>
  )
}
