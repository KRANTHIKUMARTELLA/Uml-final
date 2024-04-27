import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';
import fit from '../assets/images/fit.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4" height="200px">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={fit} alt="logo" style={{ width: '50px', height: '50px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">No Pain,No Gain</Typography>
  </Box>
);

export default Footer;