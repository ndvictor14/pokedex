import { useEffect } from 'react';
import Head from 'next/head'
import Grid from '@mui/material/Unstable_Grid2';
import { Pokeball } from '@/components/pokeball/pokeball';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();
    useEffect(() => {
        router.push('/pokedex');
    }, [router]);

  return (
    <>
      <Head>
        <title>Pokedex - Home | Victor Hernandez</title>
        <meta name="description" content="Pokedex Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Grid container justifyContent="center" alignItems="center" sx={{ height: 'calc(100vh - 70px)' }}>
            <Grid>
                <Pokeball />
            </Grid>
        </Grid>
    </>
  )
}
