import GameUnit from '../../gameUnits/gameUnit';
import types from '../types';

export const currentTeamChange = (teamNumber: 1 | 2) => ({
  type: types.CURRENT_TEAM_CHANGE,
  payload: teamNumber,
});
export const currentUnitIndexChange = (index: number) => ({
  type: types.CURRENT_UNIT_INDEX_CHANGE,
  payload: index,
});
export const chosenUnitIndexChange = (index: number | null) => ({
  type: types.CHOSEN_UNIT_INDEX_CHANGE,
  payload: index,
});
export const orderedTeamChange = (units: Array<GameUnit>) => ({
  type: types.ORDERED_TEAM_CHANGE,
  payload: units,
});
export const nextGameTick = () => ({
  type: types.NEXT_GAME_TICK,
});
export const restartGameTick = () => ({
  type: types.RESTART_GAME_TICK,
});
