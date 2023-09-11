import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from './Assets/Aptiwaylogo.jpg';
import bgImg from './Assets/banner-img.jpg'
import './App.css'
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Cookie from './Cookie'
import { Icon, Link, Paper, Stack,  } from '@mui/material';
const App = () => {
  return (
    <>
   
    {/* <Box sx={{ flexGrow: 1 }}>
    <div className="photo">
		<img src={bgImg} alt='bgimage'/>
	</div> 
  
  </Box> */}
  <div className='header'width="600" height="400">
  <Box sx={{ flexGrow: 1 }} >
      <AppBar position="fixed" style={{backgroundColor:'white',opacity:'0.7'}}>

        <Toolbar>
           <Box >
         <img
                    src={logo}
                    alt="Logo"
                   style={{width:'120px',}}
                  />
              
         </Box>
           <Box marginLeft={{sm:'auto', md:'45rem',lg:"47rem" ,xl:'auto'}} display={{lg:'flex',sm:'none',xs:'none'}} alignItems={'center'} flexDirection={'row'} justifyContent={'center'} gap={1} > 
        
              <Icon sx={{color:'black'}}>
                <EmailTwoToneIcon/>
                 </Icon>
                 <Typography sx={{color:'black'}}>siva1234@gmail.com</Typography>
             
         </Box>
           <Box sx={{marginLeft:'auto'}}display={{lg:'flex',sm:'none',xs:'none'}}alignItems={'center'} flexDirection={'row'} justifyContent={'center'} gap={1}> 
         
              <Icon sx={{color:'black'}}>
                <LocationOnIcon/>
                 </Icon>
                 <a style={{textDecoration:'none'}} href="https://www.google.com/maps/place/Manjeera+Trinity+Corporate/@17.4902601,78.3902602,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb918dab342375:0x180a04af0c47f594!8m2!3d17.490255!4d78.3928351!16s%2Fg%2F11gbx8t856?entry=ttu"  target="_blank">
                 <Typography sx={{color:'black'}}>India,Telangana</Typography>
             </a>
         </Box>
    y     
          
        </Toolbar>
      </AppBar>
    </Box>
    <Box pl={4}  pt={'15rem'} marginLeft={'2rem'}>
<Typography sx={{color:'white',fontSize:'1.3rem'}} maxWidth={'50rem'}>
Your Trusted Partner for Development of Future-proof Security Software, Advanced and Modern IT Solutions, Innovative and Advanced Biometric Technology solutions
</Typography>
<Box display={{xs:'flex',lg:'none',md:'none',sm:'none'}}  flexDirection={'row'} alignItems={'center'} gap={2} pt={2} flexWrap={'wrap'}>
<Box display={'flex'}  flexDirection={'row'}  gap={1}  > 
        
        <Icon sx={{color:'white'}}>
          <EmailTwoToneIcon/>
           </Icon>
           <Typography sx={{color:'white'}}>siva1234@gmail.com</Typography>
       
   </Box>
     <Box  display={'flex'} alignItems={'center'} flexDirection={'row'}  gap={1}> 
   
        <Icon sx={{color:'white'}}>
          <LocationOnIcon/>
           </Icon>
           <a style={{textDecoration:'none'}} href="https://www.google.com/maps/place/Manjeera+Trinity+Corporate/@17.4902601,78.3902602,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb918dab342375:0x180a04af0c47f594!8m2!3d17.490255!4d78.3928351!16s%2Fg%2F11gbx8t856?entry=ttu"  target="_blank">
           <Typography sx={{color:'white'}}>India,Telangana</Typography>
           </a>
       
   </Box>
   </Box>
                 

    </Box>


   <Box paddingTop={{lg:'14.5rem',xs:'9rem',md:'14rem' ,sm:'11.5rem'}}>
   <Cookie/>
   </Box>
  </div>
  {/* <Paper sx={{ backgroundColor: "#2f3c66" ,color:'white' }} elevation={2}>
  <Stack pb={2}>
        <Box flexGrow={1} pt={1}>
          <Box
            display="flex"
            flexDirection="row"
            pl={3}
           
            justifyContent={"space-around"}
          >
            <Box 
            display="flex"
            flexDirection="column"
            p='2'
            >
         <Typography style={{ fontSize: "1.3rem" }}>
              <b>hi</b>
            </Typography>
         <Typography style={{ fontSize: "1.3rem" }}>
              <b>hi</b>
            </Typography>
            </Box>
            
            <Typography style={{ fontSize: "1.3rem" }}>
              <b>hiiiiiiiii</b>
            </Typography>
            <Typography style={{ fontSize: "1.3rem" }}>
              <b>hiiiiiiiii</b>
            </Typography>
           
          
          </Box>
        </Box>
      </Stack>
      </Paper> */}
      
      {/* <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'#2f3c66' , alignItems:'center'}}>

        <Toolbar variant="dense">
           <Typography>  
           © 2023 Copyright:
    ALL Rights Are Reserved    
         </Typography>
        </Toolbar>
      </AppBar>
    </Box> */}
    <Box pt={0}>

    </Box>
  </>
  )
}

export default App