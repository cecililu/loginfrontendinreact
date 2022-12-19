import { Card, Grid, Tabs, Typography,Box ,Tab } from '@mui/material'
import image from '../../../images/car.png'
import React, { useState } from 'react'
import { Login } from './Login'
import { Registration } from './Registration'

const TabPanel=(props)=>{

   const {children,value,index}=props 
   return (
   <div role='tabpanel' hidden={value!==index}>
        {value=== index &&(
            <Box>
                {children}
            </Box>
        )}
   </div>
   )

}



export const LoginRegister = () => {
  
  const [value, setvalue] = useState(0)
  
  const handlechange=()=>{
       if (value==0){
        setvalue(1)
       }else{
        setvalue(0)
       }   
  }
    return (
    <>
      <Grid container sx={{height:'90vh'}}>
    
        <Grid item lg={7} sm={5} 
                sx={{
                    backgroundImage:`url(${image})`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover',
                    backgroundPosition:'center',
                    display:  {xs:'none', sm:'block'}

                    }}> 
           
        </Grid>
        <Grid item lg={5} sm={7} xs={12}
                sx={{
                   
                    }}> 
                
            <Card sx={{width:'100%',height:'100%',backgroundColor:'white'}}>
                <Box>
                    <Box sx={{borderTop:1,borderBottom:1,borderColor:'divider',padding:2}}> 
                        <Tabs value={value} onChange={handlechange}> 
                            <Tab label="Login" sx={{textTransform:'none',fontWeight:'bold'}}></Tab>
                            <Tab label="Registrations"  sx={{textTransform:'none',fontWeight:'bold'}}></Tab>      
                        </Tabs>
                        <TabPanel value={value} index={0}><Login/></TabPanel>
                        <TabPanel value={value} index={1}><Registration/></TabPanel>
                    </Box>
                    
                </Box>
                </Card>
        </Grid>
      </Grid>
    </>
  )
}
