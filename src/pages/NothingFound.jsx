import { Link } from 'react-router-dom';

const NothingFound = () => {
  return (
    <>
      <h2>Oops! nothing found...</h2>
      <Link to="/">Back home</Link>
    </>
  );
};
export default NothingFound;