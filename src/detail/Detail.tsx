import { useQuery } from '@tanstack/react-query';
import { Pokemon } from '../types';
import { useParams } from 'react-router-dom';

function Detail() {
  const id = useParams().id;
  const { data, isLoading, error } = useQuery({
    queryKey: ['detail', id],
    queryFn: () =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => {
        if (!res.ok) {
          throw res;
        }

        const list: Promise<Pokemon> = res.json();
        return list;
      }),
    enabled: !!id,
  });

  return (
    <>
      {error ? (
        'ERROR'
      ) : isLoading || !data ? (
        'Loading...'
      ) : (
        <>
          <h1>{data.name}</h1>
          <p>ID: {data.id}</p>
          <img src={data.sprites.front_default} alt="" />
        </>
      )}
    </>
  );
}

export default Detail;
