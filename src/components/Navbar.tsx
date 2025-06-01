import React from 'react';
import { AppBar, Toolbar, Container, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import logo from '../assets/SDE_company_Logo.png';

interface MenuItem {
  text: string;
  id?: string;
  path?: string;
}

const StyledLink = styled('a')(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  padding: theme.spacing(2),
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));

const RouterStyledLink = styled(RouterLink)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  padding: theme.spacing(2),
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));

const Logo = styled(RouterLink)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  fontWeight: 700,
  fontSize: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginLeft: theme.spacing(-2),
  '& span': {
    fontFamily: "'Montserrat', sans-serif",
    letterSpacing: '0.5px',
    fontWeight: 600,
  }
}));

const LogoImage = styled('img')({
  height: '40px',
  width: 'auto',
});

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  const menuItems: MenuItem[] = [
    { text: 'Home', id: 'hero' },
    { text: 'Products', id: 'products' },
    { text: 'Clients', id: 'clients' },
    { text: 'Contact', id: 'contact' },
  ];

  const drawer = (
    <List>
      {menuItems.map((item) => (
        item.path ? (
          <ListItem
            key={item.text}
            component={RouterLink}
            to={item.path}
            onClick={handleDrawerToggle}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ) : (
          <ListItem
            key={item.text}
            component="li"
            onClick={() => item.id && scrollToSection(item.id)}
            sx={{ cursor: 'pointer' }}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        )
      ))}
    </List>
  );

  return (
    <AppBar position="sticky" color="default" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Container maxWidth="lg" sx={{ pl: 1, pr: 1 }}>
        <Toolbar disableGutters>
          <Logo to="/">
            <LogoImage src={logo} alt="Sri Devi Logo" />
            <span>Sri Devi Enterprises</span>
          </Logo>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, marginLeft: 'auto' }}>
            {menuItems.map((item) => (
              item.path ? (
                <RouterStyledLink key={item.text} to={item.path}>
                  {item.text}
                </RouterStyledLink>
              ) : item.id ? (
                <StyledLink 
                  key={item.text} 
                  onClick={() => scrollToSection(item.id as string)}
                >
                  {item.text}
                </StyledLink>
              ) : null
            ))}
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, marginLeft: 'auto' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar; 