import React, { useRef, useState } from 'react';
import { Box, Container, Typography, Grid, Button, Card, CardContent, CardMedia, Avatar, Rating, TextField, Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import manifoldImage from '../assets/manifold_cover_img.jpg';
import hydraulicImage from '../assets/hydropowerpack_home_page_cover_img.jpg';
import manifoldProductImage from '../assets/manifold_img.jpg';
import flangeProductImage from '../assets/flange_img.png';
import adapterProductImage from '../assets/adapter_img.jpg';
import gleasonLogo from '../assets/gleason_logo.png';
import yukenLogo from '../assets/yuken_india_limited_logo.jpg';
import hsmLogo from '../assets/hsm_hydraulic_logo.png';
import anlonLogo from '../assets/Anlon_logo.png';
import palEngLogo from '../assets/pal-engineering-logo.jpeg';
import shreeHydrLogo from '../assets/shree_hydr_logo.jpg';
import isoCertificate from '../assets/SRI DEVI ENTERPRISES QMS FINAL_page-0001.jpg';
import bgImage from '../assets/mech_bgimage.jpg';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';

// Initialize EmailJS with your public key
emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "fdqDuY8p69uFgGMue");

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(8, 0),
  position: 'relative',
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: 1,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 0),
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  color: '#ffffff',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  '& h1, & h2': {
    color: '#ffffff',
  },
}));

const FeatureCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  backgroundColor: '#ffffff',
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const FeatureImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '250px',
  objectFit: 'cover',
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const TagsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: theme.spacing(2),
  '& span': {
    whiteSpace: 'nowrap',
  },
}));

const ContactCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}));

const ContactForm = styled('form')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

const products = [
  {
    id: 1,
    name: 'Manifolds',
    description: 'Custom-engineered hydraulic manifold blocks designed for optimal flow distribution and system integration.',
    image: manifoldProductImage,
  },
  {
    id: 2,
    name: 'Flanges',
    description: 'High-quality hydraulic flanges manufactured to precise specifications for secure connections.',
    image: flangeProductImage,
  },
  {
    id: 3,
    name: 'Adapters',
    description: 'Precision-machined hydraulic adapters ensuring seamless compatibility between different components.',
    image: adapterProductImage,
  }
];

const companies = [
  {
    id: 1,
    name: 'Gleason',
    logo: gleasonLogo
  },
  {
    id: 2,
    name: 'Yuken India Limited',
    logo: yukenLogo
  },
  {
    id: 3,
    name: 'HSM',
    logo: hsmLogo
  },
  {
    id: 4,
    name: 'Anlon',
    logo: anlonLogo
  },
  {
    id: 5,
    name: 'PAL Engineering',
    logo: palEngLogo
  },
  {
    id: 6,
    name: 'Shree Hydraulics',
    logo: shreeHydrLogo
  }
];

const Home = () => {
  const navigate = useNavigate();
  const form = useRef<HTMLFormElement>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.current) {
      // Log the form data for debugging
      const formData = new FormData(form.current);
      console.log("Form data:", {
        user_name: formData.get('user_name'),
        user_email: formData.get('user_email'),
        message: formData.get('message')
      });

      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_yodvr19",
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_xpqpdvl",
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "fdqDuY8p69uFgGMue"
        )
        .then(
          (result) => {
            console.log("Success:", result.text);
            setSnackbarMessage("Message sent successfully!");
            setSnackbarSeverity('success');
            setOpenSnackbar(true);
            if (form.current) form.current.reset();
          },
          (error) => {
            console.error("Error details:", error);
            setSnackbarMessage("Failed to send message. Please try again.");
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <HeroSection id="hero">
        <Container>
          <HeroContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography 
                variant="h1" 
                gutterBottom 
                sx={{ 
                  fontWeight: 'bold',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                }}
              >
                Hydropowerpack parts.
              </Typography>
              <Typography 
                variant="h2" 
                gutterBottom 
                sx={{ 
                  opacity: 0.95,
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                }}
              >
                Precision manufacturing excellence.
              </Typography>
              <Box mt={4}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  sx={{
                    padding: '1rem 2rem',
                    fontSize: '1.1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    color: 'primary.main',
                    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)',
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </motion.div>
          </HeroContent>
        </Container>
      </HeroSection>

      <Box py={8} sx={{ backgroundColor: '#f5f5f5' }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" gutterBottom align="center">
              Our Services
            </Typography>
            <Typography variant="body1" paragraph align="center" sx={{ mb: 6 }}>
              We specialize in providing comprehensive hydraulic solutions with our expert manufacturing services.
            </Typography>
          </motion.div>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <FeatureCard>
                <FeatureImage
                  src={manifoldImage}
                  alt="Custom manifolds"
                />
                <Typography variant="h3" gutterBottom>
                  Custom Manifold Manufacturing
                </Typography>
                <Typography variant="body1">
                  Precision-engineered hydraulic manifolds designed and manufactured for reliable performance. Our expert team delivers custom solutions tailored to your specific requirements.
                </Typography>
              </FeatureCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <FeatureCard>
                <FeatureImage
                  src={hydraulicImage}
                  alt="Hydraulic parts"
                />
                <Typography variant="h3" gutterBottom>
                  Hydraulic Parts Manufacturing
                </Typography>
                <Typography variant="body1">
                  High-quality components engineered for maximum efficiency and durability. We provide comprehensive manufacturing services to meet your hydraulic system needs.
                </Typography>
              </FeatureCard>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box id="products" py={8} sx={{ backgroundColor: '#fff' }}>
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
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Request Custom Quote
            </Button>
          </Box>
        </Container>
      </Box>

      <Box id="clients" py={8} sx={{ backgroundColor: '#f5f5f5' }}>
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
              Trusted by leading companies in the industry
            </Typography>
          </motion.div>

          <Grid container spacing={4} justifyContent="center" alignItems="center">
            {companies.map((company, index) => (
              <Grid item xs={6} sm={4} md={2} key={company.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 3,
                      backgroundColor: 'white',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        transition: 'transform 0.3s ease-in-out',
                        boxShadow: 4,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={company.logo}
                      alt={company.name}
                      sx={{
                        width: '100%',
                        objectFit: 'contain',
                        height: 'auto',
                        maxHeight: '80px',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box py={8} sx={{ backgroundColor: '#fff' }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h3" gutterBottom>
                  ISO Certified Excellence
                </Typography>
                <Typography variant="body1" paragraph>
                  Our commitment to quality is validated by our ISO certification, ensuring that every product we manufacture meets the highest international standards. This certification demonstrates our dedication to:
                </Typography>
                <Box component="ul" sx={{ 
                  listStyle: 'none', 
                  padding: 0,
                  '& li': {
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 2,
                    '&::before': {
                      content: '"✓"',
                      marginRight: 2,
                      color: 'primary.main',
                      fontWeight: 'bold'
                    }
                  }
                }}>
                  <li>Quality Management Systems</li>
                  <li>Process Control Excellence</li>
                  <li>Customer Satisfaction</li>
                  <li>Continuous Improvement</li>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  component="img"
                  src={isoCertificate}
                  alt="ISO Certification"
                  sx={{
                    maxWidth: '80%',
                    height: 'auto',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    borderRadius: 2,
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box id="contact" py={8} sx={{ backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" gutterBottom align="center">
              Get in Touch
            </Typography>
            <Typography variant="body1" paragraph align="center" sx={{ mb: 6 }}>
              Have questions about our products or need a custom solution? We're here to help.
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <ContactCard>
                <EmailIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                <Typography variant="h6">Email</Typography>
                <Typography variant="body1">sridevient22@gmail.com</Typography>
                <Button
                  href="mailto:sridevient22@gmail.com"
                  variant="outlined"
                  size="small"
                >
                  Send Email
                </Button>
              </ContactCard>
            </Grid>

            <Grid item xs={12} md={4}>
              <ContactCard>
                <WhatsAppIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                <Typography variant="h6">WhatsApp</Typography>
                <Typography variant="body1">994-541-9088</Typography>
                <Button
                  href="https://api.whatsapp.com/send?phone=9945419088&text=Hello, more information!"
                  variant="outlined"
                  size="small"
                  target="_blank"
                >
                  Chat Now
                </Button>
              </ContactCard>
            </Grid>

            <Grid item xs={12} md={4}>
              <ContactCard>
                <PhoneIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                <Typography variant="h6">Phone</Typography>
                <Typography variant="body1">+91-9945419088</Typography>
                <Button
                  href="tel:+919945419088"
                  variant="outlined"
                  size="small"
                >
                  Call Us
                </Button>
              </ContactCard>
            </Grid>
          </Grid>

          <Box mt={8}>
            <Card sx={{ p: 4 }}>
              <Typography variant="h3" gutterBottom align="center">
                Send us a Message
              </Typography>
              <ContactForm ref={form} onSubmit={sendEmail}>
                <TextField
                  name="user_name"
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  name="user_email"
                  label="Your Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  name="message"
                  label="Your Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={isSubmitting}
                  sx={{ alignSelf: 'center', minWidth: 200 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </ContactForm>
            </Card>
          </Box>
        </Container>

        <Snackbar 
          open={openSnackbar} 
          autoHideDuration={6000} 
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert 
            onClose={handleCloseSnackbar} 
            severity={snackbarSeverity}
            sx={{ width: '100%' }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>

      <Box py={8} bgcolor="#f5f5f5">
        <Container>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} textAlign="center" mb={4}>
              <Typography variant="h6" gutterBottom>
                Sri Devi Enterprises
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                Based in Bangalore, Karnataka, India
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign="center">
              <TagsContainer>
                <span>Hydraulic Power Pack Parts</span>
                <span>•</span>
                <span>Custom Manifold Blocks</span>
                <span>•</span>
                <span>Industrial Hydraulics</span>
                <span>•</span>
                <span>Precision Engineering</span>
                <span>•</span>
                <span>Control Valves</span>
                <span>•</span>
                <span>Hydraulic Systems</span>
                <span>•</span>
                <span>Power Units</span>
                <span>•</span>
                <span>Mechanical Solutions</span>
                <span>•</span>
                <span>Manufacturing Excellence</span>
              </TagsContainer>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home; 