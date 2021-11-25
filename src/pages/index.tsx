import { useQuery } from '@apollo/client';

import PokemonComponent from '../components/PokemonComponent';
import QUERY_POKEMON from '../graphql/PokemonQuery.gql';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
  const { data, loading, error } = useQuery(QUERY_POKEMON);

  if (error) {
    return <p>:( an error happened</p>;
  }

  return (
    <Main
      meta={
        <Meta
          title="Pokédex App"
          description="A sample pokédex app built using Tailwind, GraphQL and NextJS"
        />
      }
    >
      {loading && <p>loading...</p>}
      <div>
        {data &&
          data.pokemons.results.map(
            (pokemon: { id: number; name: string; image: string }) => (
              <div key={pokemon.id} className="py-1">
                <PokemonComponent
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                />
              </div>
            )
          )}
      </div>
    </Main>
  );
};

export default Index;
