import GameUnit from '../../gameUnits/gameUnit';
import types from '../types';

export const currentTeamChange = (teamNumber: 1 | 2) => ({
  type: types.CURRENT_TEAM_CHANGE,
  payload: teamNumber,
});
export const currentUnitChange = (unit: GameUnit) => ({
  type: types.CURRENT_UNIT_CHANGE,
  payload: unit,
});
export const orderedTeamChange = (units: Array<GameUnit>) => ({
  type: types.ORDER_TEAM_CHANGE,
  payload: units,
});
