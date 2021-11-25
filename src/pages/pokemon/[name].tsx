import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

import QUERY_POKEMON_INFO from '../../graphql/PokemonInfoQuery.gql';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';

const Pokemon = () => {
  const router = useRouter();
  const { name } = router.query;
  const trimmedName = (name as string)?.replace('-', '');

  const { loading, error, data } = useQuery(QUERY_POKEMON_INFO, {
    variables: { pokemon: trimmedName },
  });
  if (error) return <div>An Error Occurred</div>;
  return (
    <Main
      meta={
        <Meta
          title={`Pokédex App - ${name}`}
          description={`Information for ${name}`}
        />
      }
    >
      {loading ? <div>Loading...</div> : null}
      {data && <div>{data.getPokemon.flavorTexts[0].flavor}</div>}
    </Main>
  );
};

export default Pokemon;
