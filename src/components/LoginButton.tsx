import { useDispatch } from 'react-redux';

const LoginButton = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch({ type: 'LOGIN' });
  };

  return <button onClick={handleLogin}>Login</button>;
};

export default LoginButton;
