import * as React from 'react';
import { AppBar, Box, Button, Container, Toolbar, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { Coffee, Menu as MenuIcon } from '@mui/icons-material';
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
    { name: 'Credits', route: '/credits' }
];

export const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | undefined | HTMLElement>(null);
    const router = useRouter();
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
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
                            data-cy="mobile-menu"
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
                        <Tooltip title="Send via PayPal">
                            <Button data-cy="coffee" sx={{ color: '#fff' }} type="link" href="https://paypal.me/ndvictor14" target="_ndvictor14paypal">
                                <Coffee /> <Box sx={{ display: { xs: 'none', sm: 'block' } }}>&nbsp;Buy Me a Coffee</Box>
                            </Button>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
Header.displayName = 'Header';
