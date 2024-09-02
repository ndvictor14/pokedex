export default async function handler(req: { query: any; variables: any; }, res: any) {

    const result = await fetch("https://beta.pokeapi.co/graphql/v1beta",
        {
            method: "POST",
            body: JSON.stringify({
                query: req.query,
                variables: req.variables,
                operationName: 'pokemon'
            })
        });
    return result.json();
}
const getQuery = `
    query pokemon($limit: Int, $offset: Int) {
        pokemon_v2_pokemon_aggregate {
            aggregate {
              count
            }
        }
        pokemon_v2_pokemon(order_by: {id: asc}, limit: $limit, offset: $offset) {
            name
            id
            pokemon_v2_pokemonsprites {
                sprites
            }
            pokemon_v2_pokemontypes {
                pokemon_v2_type {
                    name
                }
            }

        }
    }   
`;

type PokemonResult = {
    name: string,
    id: number,
    pokemon_v2_pokemonsprites: any[],
    pokemon_v2_pokemontypes: any
}
export const getPokemon = async ({ limit = 24, page = 1 }: { limit?: number, page?: number } = {}) => {
    const result = await fetch("https://beta.pokeapi.co/graphql/v1beta", {
        method: "POST",
        body: JSON.stringify({
            query: getQuery,
            variables: { limit, offset: (page - 1) * limit },
            operationName: 'pokemon'
        })
    });
    const { data, error } = await result.json();
    if (error) {
        console.log(error);
        return null;
    }
    const { pokemon_v2_pokemon: rawResults = [], pokemon_v2_pokemon_aggregate: ags = {} } = data;
    const results = rawResults.map((r: PokemonResult) => {
        const { id: pokemonId, name: pokemonName, pokemon_v2_pokemontypes, pokemon_v2_pokemonsprites: v2sprites } = r;

        const types = pokemon_v2_pokemontypes.map((typeObject: any) => typeObject.pokemon_v2_type.name)
        const [spriteString] = v2sprites || [{ sprites: [] }];
        const { sprites } = spriteString;

        return {
            id: pokemonId,
            name: pokemonName,
            types,
            sprites: sprites || {}
        }
    })
    const { aggregate = {} } = ags;
    const { count: total = 0 } = aggregate;
    return {
        results,
        total
    };
}
