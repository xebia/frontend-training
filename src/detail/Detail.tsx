import { Link, useParams } from 'react-router-dom';
import { usePokemonDetail } from '../api';
import { card, subtitle } from '../styles.css';
import { backLink, imgWrapper, title } from './Detail.css';

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
        <div className={card}>
          <Link className={backLink} to="/">
            &laquo; Back to overview
          </Link>
          <h1 className={title}>{data.name}</h1>
          <div className={subtitle}>ID: {data.id}</div>
          <div className={imgWrapper}>
            <img src={data.sprites.front_default} alt="" />
          </div>
        </div>
      )}
    </>
  );
}

export default Detail;
