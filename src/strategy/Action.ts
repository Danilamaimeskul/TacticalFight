import GameUnit from '../gameUnits/gameUnit';
export interface Action {
  doAction(
    units: GameUnit | Array<GameUnit>,
    currentUnit: GameUnit,
    gameTick?: number,
  ): boolean;
}
