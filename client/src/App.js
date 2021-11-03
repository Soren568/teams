
import { Router } from '@reach/router';
import './App.css';
import ViewAddPlayer from './views/ViewAddPlayer';
import ViewPlayerList from './views/ViewPlayerList';
import ViewPlayerStatus from './views/ViewPlayerStatus';


function App() {
  return (
    <Router>
      <ViewPlayerList path="/"/>
      <ViewAddPlayer path="/players/new" />
      <ViewPlayerStatus path="players/game/:gameId"/>
    </Router>
  );
}

export default App;
