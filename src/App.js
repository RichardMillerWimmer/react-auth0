import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import ButtonContainer from './components/ButtonContainer';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

function App() {
  const {isLoading} = useAuth0();

  if(isLoading) return <div>Loading...</div>

  return (
    <div className="App">
      <ButtonContainer />
      <Profile />
    </div>
  );
}

export default App;
