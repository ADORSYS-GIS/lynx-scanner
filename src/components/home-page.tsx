import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers/rootReducer'; // Import RootState

import { increment } from '../reducers/someReducers'; // Import your action creator

const HomePage: React.FC = () => {
  const count = useSelector((state: RootState) => state.someReducer.count); // Use RootState to annotate state

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default HomePage;
