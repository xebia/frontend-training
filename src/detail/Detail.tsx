import { useParams } from 'react-router-dom';
import { usePokemonDetail } from '../api';

function Detail() {
  const id = useParams().id;
  const { data, isLoading, error } = usePokemonDetail(id);

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
