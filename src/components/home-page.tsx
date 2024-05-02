// HomePage.tsx
import React from 'react';
import { useSelector } from 'react-redux';

const HomePage: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isLoggedIn = useSelector((state: any) => state.isLoggedIn);

  return (
    <div>{isLoggedIn ? <p>You are logged in</p> : <p>Please log in</p>}</div>
  );
};

export default HomePage;
