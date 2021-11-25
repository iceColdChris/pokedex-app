import PokemonComponent from '../components/PokemonComponent';
import { listClient } from '../graphql/clients';
import QUERY_POKEMON from '../graphql/PokemonListQuery.gql';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

type PokemonResponse = {
  id: number;
  name: string;
  image: string;
};

type IndexProps = {
  pokemonList: Array<PokemonResponse>;
};

export const getStaticProps = async () => {
  const { data } = await listClient.query({
    query: QUERY_POKEMON,
    variables: { limit: 251 },
  });

  return {
    props: {
      pokemonList: data.pokemons.results,
    },
  };
};

const Index = ({ pokemonList }: IndexProps) => {
  return (
    <Main
      meta={
        <Meta
          title="Pokédex App"
          description="A sample pokédex app built using Tailwind, GraphQL and NextJS"
        />
      }
    >
      <div>
        {pokemonList.map((pokemon) => {
          return (
            <div key={pokemon.id} className="py-1">
              <PokemonComponent
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.image}
              />
            </div>
          );
        })}
      </div>
    </Main>
  );
};

export default Index;
