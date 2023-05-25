import { Route } from 'react-router-dom';
import { Routes as AllRoutes } from 'react-router-dom';
import { Game } from '../Game';
import { Parameters } from '../Parameters/Parameters';
import { Leaderboard } from '../Leaderboard/Leaderboard';
import { MainLayout } from '../MainLayout/MainLayout';
import { Settings } from '../Settings/Settings';
import { PlayerParameters } from '../PlayerParameters/PlayerParameters';

export const Routes = () => {
  return (
    <AllRoutes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/newGame" element={<Game />} />
      <Route path="/parameters" element={<Parameters />}>
        <Route
          path="/parameters/playerParameters"
          element={<PlayerParameters />}
        />
        <Route path="/parameters/settings" element={<Settings />} />
      </Route>
      <Route path="/leaderboard" element={<Leaderboard />} />
    </AllRoutes>
  );
};
