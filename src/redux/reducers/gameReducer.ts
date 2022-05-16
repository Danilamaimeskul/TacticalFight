import GameUnit from '../../gameUnits/gameUnit';
import types from '../types';

export type gameState = {
  currentTeam: 1 | 2 | null;
  currentUnit: GameUnit | null;
  orderedCurrentTeam: Array<GameUnit>;
};

const initialState: gameState = {
  currentTeam: null,
  currentUnit: null,
  orderedCurrentTeam: [],
};

const gameReducer = (
  state = initialState,
  action: {type: string; payload: 1 | 2 | Array<GameUnit> | null},
) => {
  const {type, payload} = action;
  switch (type) {
    case types.CURRENT_TEAM_CHANGE:
      return {
        ...state,
        currentTeam: payload,
      };
    case types.CURRENT_UNIT_CHANGE:
      return {
        ...state,
        currentUnit: payload,
      };
    case types.ORDER_TEAM_CHANGE:
      return {
        ...state,
        orderedCurrentTeam: payload,
      };
    default:
      return state;
  }
};

export default gameReducer;
