import GameUnit from '../../gameUnits/gameUnit';
import types from '../types';

export type teamState = {
  units: Array<GameUnit>;
};

const initialState: teamState = {
  units: [],
};

const teamsReducer = (
  state = initialState,
  action: {type: string; payload: GameUnit | null},
) => {
  const {type, payload} = action;
  switch (type) {
    case types.UNITS_CHANGE:
      return {
        ...state,
        units: payload,
      };
    default:
      return state;
  }
};

export default teamsReducer;
