import React from 'react'
import {Box,Stack,Typography,Button} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
    return (
        <Box sx={{
            mt: {lg:'212px',xs:'70px'},
            ml: {sm:'50px'}
        }} position ="relative" p="20px">
                <Typography color="#FF2625"
                fontWeight="600" fontSize="26px">
                    Fitness Club  
                </Typography>
                <Typography fontweight={700}
                sx={{fontSize: {lg: '44px', xs:'40px'
                }}}
                mb="23px" mt="30px"
                >
                    Get Fit, Get Healthy
                </Typography>
                <Typography fontSize="22px"
                 lineHeight="35px" mb={4}>
                    Check out the most effective exercises for you body
                </Typography>
                <Button variant="contained"
                color="error"
                href="#exercises"
                sx={{ backgroundcolour: '#FF2625',padding:'10px'}}
                >
                    Explore Exercises
                </Button>
                <Typography
                 fontWeight={600}
                 color="#FF2625"
                 sx={{
                    opacity:0.1,
                    display:{lg:'block',xs:'none'}
                 }}
                 fontSize="150px"
                >
                    Exercise
                </Typography>
                
                <img src={ HeroBannerImage } alt="banner" className="hero-banner-img"  />
        </Box>
    )
}

export default HeroBanner
