import { BrowserRouter } from 'react-router-dom';
import { Routes } from './components/Routes';
import { PlayersContextProvider } from './components/Context/PlayersContext';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <PlayersContextProvider>
        <div className="App">
          <Routes />
        </div>
      </PlayersContextProvider>
    </BrowserRouter>
  );
}

export default App;
