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
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
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
