import { useRouter } from 'next/router';

const Pokemon = () => {
  const router = useRouter();
  const { name } = router.query;

  return <p>Pokemon: {name}</p>;
};

export default Pokemon;
