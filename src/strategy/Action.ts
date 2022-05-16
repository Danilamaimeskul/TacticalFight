import GameUnit from '../gameUnits/gameUnit';

export interface Action {
  doAction(units: Array<GameUnit>, currentUnit: GameUnit): void;
}
