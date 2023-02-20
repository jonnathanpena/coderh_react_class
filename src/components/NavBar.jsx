import { useState } from 'react';
import {
  Container,
  Toolbar,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from './CartWidget';

import {
  MainAppBarStyled,
  LinkItemTypographyStyled,
  ButtonMenuItemStyled,
  TitlePageNameStyled,
  IconButtonStyled
} from './styles/NavBarStyles';

const pages = ['Udemy', 'Coursera', 'Edx', 'Skillshare'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <MainAppBarStyled position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TitlePageNameStyled
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            Learning In
          </TitlePageNameStyled>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButtonStyled
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButtonStyled>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <LinkItemTypographyStyled textAlign="center">{page}</LinkItemTypographyStyled>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <TitlePageNameStyled
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            }}
          >
            Learning In
          </TitlePageNameStyled>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <ButtonMenuItemStyled
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </ButtonMenuItemStyled>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <CartWidget />
          </Box>
        </Toolbar>
      </Container>
    </MainAppBarStyled>
  );
};

export default NavBar;