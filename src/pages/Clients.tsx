import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
} from '@mui/material';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    company: 'HydroPower Solutions',
    comment: 'Sridevi Enterprises has been our trusted supplier for hydraulic components. Their quality and reliability are unmatched.',
    rating: 5,
    image: '/client1.jpg', // You'll need to add this image
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    company: 'Industrial Dynamics',
    comment: 'The custom solutions provided by Sridevi Enterprises have significantly improved our operational efficiency.',
    rating: 5,
    image: '/client2.jpg', // You'll need to add this image
  },
  {
    id: 3,
    name: 'Michael Brown',
    company: 'PowerTech Industries',
    comment: 'Excellent service and top-notch product quality. We highly recommend their hydropower pack parts.',
    rating: 5,
    image: '/client3.jpg', // You'll need to add this image
  },
];

const clientLogos = [
  '/logo1.png', // You'll need to add these images
  '/logo2.png',
  '/logo3.png',
  '/logo4.png',
  '/logo5.png',
  '/logo6.png',
];

const Clients = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" gutterBottom align="center">
            Our Clients
          </Typography>
          <Typography variant="body1" paragraph align="center" sx={{ mb: 6 }}>
            We are proud to work with industry leaders who trust us for their
            hydropower pack parts needs.
          </Typography>
        </motion.div>

        {/* Client Logos */}
        <Box sx={{ mb: 8 }}>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            {clientLogos.map((logo, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Box
                    component="img"
                    src={logo}
                    alt="Client Logo"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      filter: 'grayscale(100%)',
                      opacity: 0.7,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        filter: 'grayscale(0%)',
                        opacity: 1,
                      },
                    }}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Testimonials */}
        <Typography variant="h3" gutterBottom align="center" sx={{ mb: 4 }}>
          What Our Clients Say
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={testimonial.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      transition: 'transform 0.3s ease-in-out',
                      boxShadow: 4,
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        src={testimonial.image}
                        sx={{ width: 60, height: 60, mr: 2 }}
                      />
                      <Box>
                        <Typography variant="h6">{testimonial.name}</Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                          {testimonial.company}
                        </Typography>
                      </Box>
                    </Box>
                    <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                    <Typography variant="body1">
                      "{testimonial.comment}"
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Clients; 