import GameUnit from '../../gameUnits/gameUnit';
import types from '../types';

export type gameState = {
  currentUnitIndex: number | null;
  orderedUnits: Array<GameUnit>;
};

const initialState: gameState = {
  currentUnitIndex: null,
  orderedUnits: [],
};

const gameReducer = (
  state = initialState,
  action: {type: string; payload: number | Array<GameUnit> | null},
) => {
  const {type, payload} = action;
  switch (type) {
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
