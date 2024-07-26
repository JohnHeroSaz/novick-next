import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Header as HeaderType } from '@/types/types';
import styles from '@/components/styles/navbar.module.scss'
import BackgroundLetterAvatars from './Avatar';

//Login logic
import { loginRequest } from '../../services/login/authConfig';
import { useMsal } from '@azure/msal-react';

const drawerWidth = 240;

interface Props {
  data: HeaderType;
  showMobileMenu: Boolean;
  showLoginMenu: Boolean;
  isLogged: Boolean;
}

const NavBar = (props: Props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { instance } = useMsal();

  const handleLoginRedirect = () => {
    instance.loginRedirect(loginRequest).catch((error: any) => console.log(error));
  };

  const handleLogoutRedirect = () => {
    instance.logoutRedirect().catch((error: any) => console.log(error));
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', margin: '1rem' }}>
      <Box className={styles.logo} sx={{ marginBottom: '2rem' }} >
        <img src={props.data.logoImage} alt="Logo" />
      </Box>
      <List>
        {props.data.headerLinks.map((link, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>{link.text}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: 'ghostwhite' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box className={styles['left-section']}>
            <Box className={styles.logo}>
              <a href={props.data.logoHomeLink}>
                <img src={props.data.logoImage} alt="Logo" />
              </a>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon sx={{ marginLeft: "13rem" }} className={styles.fixBtn} />
            </IconButton>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, marginLeft: "2rem", justifyContent: 'space-around', alignItems: "end" }}>
              {props.data.headerLinks.map((link, index) => (
                <Box key={index} sx={{ textAlign: 'center' }}>
                  <Box sx={{ marginTop: 1 }}>
                    <img src={link.icon} alt={link.text} style={{ display: 'block', margin: '0 auto' }} />
                  </Box>
                  <Button sx={{ color: '#000', display: 'block', }}>
                    <Typography textTransform={'capitalize'}>{link.text}</Typography>
                  </Button>
                </Box>
              ))}
            </Box>

          </Box>
          {props.showMobileMenu &&
            <Box className={styles['user-select']}>
              {/* <select>
                <option>Sunshine Daycare</option>
              </select> */}
              <BackgroundLetterAvatars />
              <Typography sx={{ color: "#000" }}>Sunshine Daycare</Typography>
            </Box>
          }
          {
            props.showLoginMenu &&
            <Box className={styles['user-select']}>
              <Button onClick={props.isLogged ? handleLogoutRedirect : handleLoginRedirect}>
                {
                  props.isLogged ?
                    "Logout" :
                    "Login"
                }
              </Button>
            </Box>
          }
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </>
  );
}

export default NavBar;