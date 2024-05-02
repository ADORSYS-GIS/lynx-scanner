import { JSX } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import UserLogin from './components/UserLogin';
import Homepage from './components/home-page';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

/**
 * The main application component.
 */
export function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <LoginButton />
          <LogoutButton />
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<UserLogin />} />
        </Routes>
      </Router>
    </Provider>
  );
}
