import { Route } from 'react-router-dom';
import { Routes as AllRoutes } from 'react-router-dom';
import { Game } from '../../../pages/Game';
import { Parameters } from '../../../pages/Parameters';
import { Leaderboard } from '../../../pages/Leaderboard';
import { MainPage } from '../../../pages/MainPage';
import { Settings } from '../../../widgets/Settings';
import { PlayerParameters } from '../../../widgets/PlayerParameters';
import {
  MAIN_MENU,
  SETTINGS,
  PLAYER_PARAMETERS,
  GAME,
  PARAMETERS,
  LEADERBOARD,
} from '../../../entities/routesSlice/constants/paths';

export const Routes = () => {
  return (
    <AllRoutes>
      <Route path={MAIN_MENU} element={<MainPage />} />
      <Route path={GAME} element={<Game />} />
      <Route path={PARAMETERS} element={<Parameters />}>
        <Route path={PLAYER_PARAMETERS} element={<PlayerParameters />} />
        <Route path={SETTINGS} element={<Settings />} />
      </Route>
      <Route path={LEADERBOARD} element={<Leaderboard />} />
    </AllRoutes>
  );
};
