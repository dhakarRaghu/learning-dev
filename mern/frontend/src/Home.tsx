import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <button style={{ padding: '5px 10px' }}>
        <Link to="/ShortUrl" style={{ textDecoration: 'none', color: 'inherit' }}>
          Shorten your URL
        </Link>
      </button>

      <button style={{ marginTop: '10px', padding: '5px 10px' }}>
        <Link to="/Upload" style={{ textDecoration: 'none', color: 'inherit' }}>
          Upload a file
        </Link>
      </button>
    </div>
  );
};

export default Home;
