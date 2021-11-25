import { useRouter } from 'next/router';

import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';

const Pokemon = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <Main
      meta={
        <Meta
          title={`Pokédex App - ${name}`}
          description={`Information for ${name}`}
        />
      }
    >
      <p>Pokemon: {name}</p>
    </Main>
  );
};

export default Pokemon;
