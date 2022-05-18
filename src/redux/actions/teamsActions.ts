import GameUnit from '../../gameUnits/gameUnit';
import types from '../types';

export const unitsChange = (units: Array<GameUnit>) => ({
  type: types.UNITS_CHANGE,
  payload: units,
});
