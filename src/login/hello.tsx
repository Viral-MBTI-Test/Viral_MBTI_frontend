import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
const Hello = () => {
  const userName = useParams();
  return (
    <h1>
      {' '}
      <Link to="/">login</Link>
    </h1>
  );
};
export default Hello;
