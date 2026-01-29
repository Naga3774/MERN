import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ name }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <div>
      <h1>Name : {name}</h1>

      <p>
        Welcome to the React Hooks learning project.  
        This application demonstrates all major React hooks with
        real-time examples.
      </p>

      <h3>Hooks Covered in this Project</h3>
      <ul>
        <li>useState – Managing component state</li>
        <li>useEffect – Handling side effects</li>
        <li>useRef – Accessing DOM elements</li>
        <li>useReducer – Complex state management</li>
        <li>useMemo – Performance optimization</li>
        <li>useCallback – Memoizing functions</li>
      </ul>

      <button onClick={handleClick}>
        Go to About Page
      </button>
    </div>
  );
};

export default Home;
