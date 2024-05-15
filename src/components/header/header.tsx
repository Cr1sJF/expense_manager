import {
  AppBar,
  Box,
  Button,
  // IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { useContext } from 'react';
import './header.scss';
import { UserContext } from '../../context/userContext';
import { AccountCircle } from '@mui/icons-material';

// const onlyMobile = {
//   display: { xs: 'block', md: 'none' },
// };

// const onlyDesktop = {
//   display: { xs: 'none', md: 'block', display: 'flex', alignItems: 'center' },
// };

const Header = () => {
  const pages = ['Process', 'Bills', 'SplitWise'];
  const settings = ['Lists', 'Categories', 'Rules'];

  const { loggedIn, login } = useContext(UserContext);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className="header">
      {/* Mobile Toolbar */}

      {/* Desktop Toolbar */}
      <Toolbar
        sx={{ xs: 'none', md: 'block', display: 'flex', alignItems: 'center' }}
      >
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6">
            <Link href="/">Expense Manager</Link>
          </Typography>

          {loggedIn && (
            <>
              {pages.map((page) => (
                <Link key={page} href={`/${page.toLowerCase()}`}>
                  {page}
                </Link>
              ))}

              <Box
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  justifyContent: 'end',
                  alignItems: 'center',
                }}
              >
                <Button
                  disableElevation
                  onClick={handleClick}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  <SettingsIcon />
                </Button>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleClose}>
                      <Link
                        className="menu"
                        href={`/settings/${setting.toLowerCase()}`}
                      >
                        {setting}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </>
          )}

          {!loggedIn && (
            <>
              <Box
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  justifyContent: 'end',
                  alignItems: 'center',
                }}
              >
                <Button
                  disableElevation
                  onClick={() => {
                    login('user', 'pass');
                  }}
                >
                  <AccountCircle />
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
