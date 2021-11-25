import Image from 'next/image';
import Link from 'next/link';

type PokemonComponentProps = {
  id: number;
  name: string;
  image: string;
};

const PokemonComponent = ({ id, name, image }: PokemonComponentProps) => {
  return (
    <Link href={`/pokemon/${name}`} passHref>
      <div className="card lg:card-side bordered shadow" key={id}>
        <figure>
          <Image
            height={150}
            width={150}
            src={image}
            objectFit={'contain'}
            alt={`image of ${name}`}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default PokemonComponent;
