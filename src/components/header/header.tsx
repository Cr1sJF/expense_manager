import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from 'react';
import './header.scss';

const onlyMobile = {
  display: { xs: 'block', md: 'none' },
};

const onlyDesktop = {
  display: { xs: 'none', md: 'block' },
};

const Header = () => {
  const pages = ['Process', 'Split bills', 'SplitWise'];
  const settings = ['Lists', 'Categories', 'Rules'];

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
      <Toolbar sx={onlyMobile}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6">
          <Link className="headerLink" href="/">
            Expense Manager
          </Link>
        </Typography>
      </Toolbar>

      {/* Desktop Toolbar */}
      <Toolbar sx={onlyDesktop}>
        <Typography variant="h6">
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <Link href="/">Expense Manager</Link>
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
                  <MenuItem onClick={handleClose}>
                    <Link
                      className="menu"
                      key={setting}
                      href={`/${setting.toLowerCase()}`}
                    >
                      {setting}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
