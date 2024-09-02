import Head from 'next/head';
import { getPokemon } from '@/pages/api/pokemon';
import { PokemonPage } from '@/types/pokemon-page.type';
import { Pokedex } from '@/components/pokedex/pokedex';
import React from 'react';
import { Box } from '@mui/material';
import { GetServerSideProps } from 'next';

type PokedexPageProps = {
    error?: any,
    pokemon?: PokemonPage | null
};

export const PokedexPage = ({ error, pokemon }: PokedexPageProps) => {
    return (
        <>
            <Head>
                <title>Pokedex | Victor Hernandez | Main</title>
                <meta name="description" content="Pokedex gallery." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box my={2} mx={1}>
                {error && <div>{error}</div>}
                {!(error || pokemon) && <div>No Pokemon found!</div>}
                {pokemon && <Pokedex pokemon={pokemon} />}
            </Box>
        </>

    );
};

export default PokedexPage;

PokedexPage.displayName = 'PokedexPage';

export const getServerSideProps: GetServerSideProps<PokedexPageProps> = async (context) => {
    const { query } = context;
    const { page = 1 } = query || undefined;
    let error = null;
    let pokemon: PokemonPage | null = null;
    try {
        pokemon = await getPokemon({ page: +page });
    } catch (e) {
        error = "Failed to fetch Pokemon.";
    }
    const data: PokedexPageProps = {
        error,
        pokemon
    };

    // Pass data to the page via props
    return { props: data }
}
