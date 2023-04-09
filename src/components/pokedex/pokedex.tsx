import React from 'react';
import { PokedexFilters } from '@/components/pokedex-filters/pokedex-filters';
import { PokemonPage } from '@/types/pokemon-page.type';
import { Pagination, Paper, styled } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useRouter } from 'next/router';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const Pokedex = ({ pokemon }: { pokemon: PokemonPage }) => {
    const pages = Math.ceil(pokemon.total / 24);
    const router = useRouter();
    const { page = 1 } = router.query;

    const handlePagination = (event: React.ChangeEvent<unknown>, pageNumber: number) => {
        router.push(`/pokedex?page=${pageNumber}`);
    };

    return (
        <div>
            <PokedexFilters onSearch={() => {}} onSort={() => {}} />
            <Grid container spacing={2} mt={2}>
                {pokemon?.results?.map((pokemon) => {
                    return (
                        <Grid xs={12} sm={6} md={4} lg={3} key={pokemon.id}>
                            <Item>{pokemon.name}</Item>
                        </Grid>
                    )
                })
                }
            </Grid>
            <Pagination count={pages || 0} page={+page} onChange={handlePagination}/>
        </div>
    );
};

Pokedex.displayName = 'Pokedex';