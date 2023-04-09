import Head from 'next/head';
import { PokedexFilters } from '@/components/pokedex-filters/pokedex-filters';
import { getPokemon } from '@/pages/api/pokemon';
import { PokemonPage } from '@/types/pokemon-page.type';
import { Pokedex } from '@/components/pokedex/pokedex';
import React from 'react';
import { Box } from '@mui/material';

export const PokedexPage = ({ error, pokemon }: { error?: any, pokemon?: PokemonPage }) => {
    return (
        <>
            <Head>
                <title>Pokedex | Victor Hernandez | Main</title>
                <meta name="description" content="Pokedex gallery." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box my={2} mx={1}>
                {!pokemon && <div>No Pokemon found!</div>}
                {pokemon && <Pokedex pokemon={pokemon} />}
            </Box>
        </>

    );
};

export default PokedexPage;

PokedexPage.displayName = 'PokedexPage';

export async function getServerSideProps() {
    let error = null;
    let pokemon: PokemonPage | null = null;
    try {
        pokemon = await getPokemon();
    } catch (e) {
        error = "Failed to fetch Pokemon.";
    }

    // Pass data to the page via props
    return { props: { pokemon, error  } }
}