import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Manifolds',
    description: 'Custom-engineered hydraulic manifold blocks designed for optimal flow distribution and system integration.',
    image: '/product1.jpg', // You'll need to add this image
  },
  {
    id: 2,
    name: 'Flanges',
    description: 'High-quality hydraulic flanges manufactured to precise specifications for secure connections.',
    image: '/product2.jpg', // You'll need to add this image
  },
  {
    id: 3,
    name: 'Adapters',
    description: 'Precision-machined hydraulic adapters ensuring seamless compatibility between different components.',
    image: '/product3.jpg', // You'll need to add this image
  },
  // Add more products as needed
];

const Products = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" gutterBottom align="center">
            Our Products
          </Typography>
          <Typography variant="body1" paragraph align="center" sx={{ mb: 6 }}>
            We specialize in manufacturing high-quality hydropower pack parts
            that meet the highest industry standards.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
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
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography>
                      {product.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h3" gutterBottom>
            Custom Solutions
          </Typography>
          <Typography variant="body1" paragraph>
            Need a custom solution? We specialize in designing and manufacturing
            custom hydropower pack parts to meet your specific requirements.
          </Typography>
          <Button
            variant="contained"
            size="large"
            color="primary"
            href="/contact"
          >
            Request Custom Quote
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Products; 