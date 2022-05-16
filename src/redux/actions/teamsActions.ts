import GameUnit from '../../gameUnits/gameUnit';
import types from '../types';

export const team1Change = (units: Array<GameUnit>) => ({
  type: types.TEAM_1_UNITS_CHANGE,
  payload: units,
});
export const team2Change = (units: Array<GameUnit>) => ({
  type: types.TEAM_2_UNITS_CHANGE,
  payload: units,
});
