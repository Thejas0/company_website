import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 4, bgcolor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} SriDevi Enterprises. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 