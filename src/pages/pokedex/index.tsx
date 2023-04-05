import Head from 'next/head';
import { PokedexFilters } from '@/components/pokedex-filters/pokedex-filters';

export const PokedexPage = () => {

    return (
        <>
            <Head>
                <title>Pokedex | Victor Hernandez | Main</title>
                <meta name="description" content="Pokedex gallery." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                Pokedex
                <PokedexFilters onSearch={() => {}} onSort={() => {}} />
            </div>
        </>

    );
};

export default PokedexPage;

PokedexPage.displayName = 'PokedexPage';