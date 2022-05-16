import GameUnit from '../../gameUnits/gameUnit';
import types from '../types';

export type teamState = {
  team1: Array<GameUnit>;
  team2: Array<GameUnit>;
};

const initialState: teamState = {
  team1: [],
  team2: [],
};

const teamsReducer = (
  state = initialState,
  action: {type: string; payload: 1 | 2 | Array<GameUnit> | null},
) => {
  const {type, payload} = action;
  switch (type) {
    case types.TEAM_1_UNITS_CHANGE:
      return {
        ...state,
        team1: payload,
      };
    case types.TEAM_2_UNITS_CHANGE:
      return {
        ...state,
        team2: payload,
      };
    default:
      return state;
  }
};

export default teamsReducer;
