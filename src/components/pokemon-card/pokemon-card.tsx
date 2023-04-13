import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { Pokemon } from '@/types/pokemon.type';
import { PokemonCardImage } from './pokemon-card-image';
import { TypeBadge } from './type-badge';
import Grid from '@mui/material/Unstable_Grid2';

export const PokemonCard = ({ pokemon, priority }: { pokemon: Pokemon, priority?: boolean }) => {
    const { id, name, sprites, types = [] } = pokemon;

    return (
        <Paper>
            <Grid container direction="column" spacing={1}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} m={1}>
                    <Typography variant="subtitle2">{id} - {name.toUpperCase()}</Typography>
                    <Typography variant="body1" component="div">
                        <TypeBadge types={types} />
                    </Typography>
                </Box>
                <Box mx="auto">
                    <PokemonCardImage sprites={sprites} priority={priority} />
                </Box>
            </Grid>
        </Paper>
    );
};

PokemonCard.displayName = 'PokemonCard';