import * as React from 'react';
import { AppBar, Avatar, Box, Button, Container, Toolbar, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import {useRouter} from "next/router";

type Page = {
    name: string,
    route: string
}
const pages: Page[] = [
    { name: 'Home', route: '/pokedex' },
    { name: 'Simulator', route: '/simulator' },
    { name: 'Credits', route: '/credits' }
];
const settings = ['Profile', 'Account', 'Logout'];

export const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | undefined | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const router = useRouter();
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handlePageClick = ({ e, page }: { e: React.MouseEvent<HTMLElement>, page: Page }) => {
        e.preventDefault();
        handleCloseNavMenu();
        router.push(page.route);
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                    >
                        <Image
                            src={logo}
                            alt="Logo"
                            width={32}
                            height={32}
                        />
                    </Box>
                    <Typography
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Pokedex
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
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
                                <MenuItem key={page.name} onClick={(e: React.MouseEvent<HTMLElement>) => handlePageClick({ e, page })}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box
                        sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
                    >
                        <Image
                            src={logo}
                            alt="Logo"
                            width={32}
                            height={32}
                        />
                    </Box>

                    <Typography
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Pokedex
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={(e: React.MouseEvent<HTMLElement>) => handlePageClick({ e, page })}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
Header.displayName = 'Header';
