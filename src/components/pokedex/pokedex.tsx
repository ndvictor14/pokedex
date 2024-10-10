import React from 'react';
import { PokemonPage } from '@/types/pokemon-page.type';
import { Pagination } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useRouter } from 'next/router';
import { PokemonCard } from '../pokemon-card/pokemon-card';

export const Pokedex = ({ pokemon }: { pokemon: PokemonPage }) => {
    const pages = Math.ceil(pokemon.total / 24);
    const router = useRouter();
    const { page = 1 } = router.query;

    const handlePagination = (event: React.ChangeEvent<unknown>, pageNumber: number) => {
        router.push(`/pokedex?page=${pageNumber}`);
    };

    return (
        <div>
            <Grid container spacing={2} mt={2} direction="column">
                <Grid container>
                    {pokemon?.results?.map((pokemon, pokemonIndex) => {
                        return (
                            <Grid xs={12} sm={6} md={4} lg={3} key={pokemon.id}>
                                <PokemonCard priority={pokemonIndex <= 12} pokemon={pokemon} />
                            </Grid>
                        )
                    })
                    }
                </Grid>
                <Grid alignItems="center" mt={2} m="auto">
                    <Pagination count={pages || 0} page={+page} onChange={handlePagination}/>
                </Grid>
            </Grid>
        </div>
    );
};

Pokedex.displayName = 'Pokedex';
