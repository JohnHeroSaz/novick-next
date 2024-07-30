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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//Login logic
import { loginRequest } from '../../services/login/authConfig';
import { useMsal } from '@azure/msal-react';
import LoginMenu from '../layout/login/components/LoginMenu';
import ProfileContext from '@/context/ProfileContext';

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
  const { graphData } = React.useContext(ProfileContext);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box className={styles.logo}>
              <a href={props.data.logoHomeLink}>
                <img src={props.data.logoImage} alt="Logo" />
              </a>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' }, ml: 2 }}
            >
              <MenuIcon />
            </IconButton>
            {props.isLogged && (
              <Box className={styles['menu-icons']} sx={{ display: { xs: 'none', sm: 'flex' } }}>
                {props.data.headerLinks.map((link, index) => (
                  <Box key={index} sx={{ textAlign: 'center', mx: 1 }}>
                    <Button >
                      <a href={link.url}>
                        <img src={link.icon} alt={link.text} style={{ display: 'block', margin: '0 auto' }} />
                      </a>
                    </Button>
                    <Typography sx={{ color: '#000' }} textTransform="capitalize">{link.text}</Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {!props.isLogged ? (
              <Button onClick={handleLoginRedirect}>
                <p>Login</p>
              </Button>
            ) :
              (
                graphData &&
                <LoginMenu children={
                  <Box className={styles['user-select']}>
                    <BackgroundLetterAvatars />
                    <Typography textTransform="capitalize" sx={{ color: '#000', ml: 1 }}>{`${graphData.displayName} ${graphData.surname}`}</Typography>
                    <ExpandMoreIcon sx={{ color: "black" }} />
                  </Box>
                } handleLogoutRedirect={handleLogoutRedirect}
                />
              )
            }
          </Box>
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