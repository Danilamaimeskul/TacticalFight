import {Action} from './Action';
import GameUnit from '../gameUnits/gameUnit';

export class Mage implements Action {
  doAction(units: GameUnit[], currentUnit: GameUnit): void {
    units.forEach(unit => {
      unit.hp -= currentUnit.damage;
    });
  }
}

export class Melee implements Action {
  doAction(units: GameUnit[], currentUnit: GameUnit): void {
    if (
      Math.abs(units[0].xPosition - currentUnit.xPosition) <= 1 &&
      Math.abs(units[0].yPosition - currentUnit.yPosition) <= 1
    ) {
      units[0].hp -= currentUnit.damage;
    }
  }
}

export class Range implements Action {
  doAction(units: GameUnit[], currentUnit: GameUnit): void {
    units[0].hp -= currentUnit.damage;
  }
}

export class SingleHeal implements Action {
  doAction(units: GameUnit[], currentUnit: GameUnit): void {
    units[0].hp += currentUnit.heal;
  }
}

export class MassHeal implements Action {
  doAction(units: GameUnit[], currentUnit: GameUnit): void {
    units.forEach(unit => {
      unit.hp += currentUnit.heal;
    });
  }
}

export class Paralyzer implements Action {
  doAction(units: GameUnit[], currentUnit: GameUnit): void {
    units[0].isParalyzed = true;
  }
}
