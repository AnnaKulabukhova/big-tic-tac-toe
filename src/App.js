import { BrowserRouter } from 'react-router-dom';
import { Routes } from './components/Routes';
import { PlayersContextProvider } from './components/Context/PlayersContext';
import { SettingsContextProvider } from './components/Context/SettingsContext';
import { LeaderboardContextProvider } from './components/Context/LeaderboardContext';
import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <PlayersContextProvider>
        <SettingsContextProvider>
          <LeaderboardContextProvider>
            <div className={styles.app}>
              <Routes />
            </div>
          </LeaderboardContextProvider>
        </SettingsContextProvider>
      </PlayersContextProvider>
    </BrowserRouter>
  );
}

export default App;
