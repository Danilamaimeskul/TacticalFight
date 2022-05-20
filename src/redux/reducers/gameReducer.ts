import GameUnit from '../../gameUnits/gameUnit';
import types from '../types';

export type gameState = {
  currentUnitIndex: number | null;
  chosenUnitIndex: number | null;
  gameTick: number;
  orderedUnits: Array<GameUnit>;
};

const initialState: gameState = {
  currentUnitIndex: null,
  chosenUnitIndex: null,
  gameTick: 0,
  orderedUnits: [],
};

const gameReducer = (
  state = initialState,
  action: {type: string; payload: number | Array<GameUnit> | null},
) => {
  const {type, payload} = action;
  switch (type) {
    case types.CURRENT_UNIT_INDEX_CHANGE:
      return {
        ...state,
        currentUnitIndex: payload,
      };
    case types.CHOSEN_UNIT_INDEX_CHANGE:
      return {
        ...state,
        chosenUnitIndex: payload,
      };
    case types.ORDERED_TEAM_CHANGE:
      return {
        ...state,
        orderedUnits: payload,
      };
    case types.NEXT_GAME_TICK:
      return {
        ...state,
        gameTick: state.gameTick + 1,
      };
    case types.RESTART_GAME_TICK:
      return {
        ...state,
        gameTick: 0,
      };
    default:
      return state;
  }
};

export default gameReducer;
