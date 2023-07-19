import { Route } from 'react-router-dom';
import { Routes as AllRoutes } from 'react-router-dom';
import { Game } from '../Game';
import { Parameters } from '../Parameters';
import { Leaderboard } from '../Leaderboard';
import { MainLayout } from '../MainLayout';
import { Settings } from '../Settings';
import { PlayerParameters } from '../PlayerParameters';
import {
  MAIN_MENU,
  SETTINGS,
  PLAYER_PARAMETERS,
  NEW_GAME,
  PARAMETERS,
  LEADERBOARD,
} from '../../constants/paths';

export const Routes = () => {
  return (
    <AllRoutes>
      <Route path={MAIN_MENU} element={<MainLayout />} />
      <Route path={NEW_GAME} element={<Game />} />
      <Route path={PARAMETERS} element={<Parameters />}>
        <Route path={PLAYER_PARAMETERS} element={<PlayerParameters />} />
        <Route path={SETTINGS} element={<Settings />} />
      </Route>
      <Route path={LEADERBOARD} element={<Leaderboard />} />
    </AllRoutes>
  );
};
