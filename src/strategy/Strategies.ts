import {Action} from './Action';
import GameUnit from '../gameUnits/gameUnit';

export class Mage implements Action {
  doAction(units: GameUnit[], currentUnit: GameUnit): boolean {
    units.forEach(unit => {
      if (unit.team !== currentUnit.team && unit.hp > 0) {
        unit.hp -= unit.isDefend ? currentUnit.damage / 2 : currentUnit.damage;
        unit.hp < 0 ? (unit.hp = 0) : null;
      }
    });
    return true;
  }
}

export class Melee implements Action {
  doAction(unit: GameUnit, currentUnit: GameUnit): boolean {
    if (
      Math.abs(unit.xPosition - currentUnit.xPosition) <= 1 &&
      Math.abs(unit.yPosition - currentUnit.yPosition) <= 1 &&
      unit.team !== currentUnit.team &&
      unit.hp > 0
    ) {
      unit.hp -= unit.isDefend ? currentUnit.damage / 2 : currentUnit.damage;
      unit.hp < 0 ? (unit.hp = 0) : null;
      return true;
    }
    return false;
  }
}

export class Range implements Action {
  doAction(unit: GameUnit, currentUnit: GameUnit): boolean {
    if (unit.team !== currentUnit.team && unit.hp > 0) {
      unit.hp -= unit.isDefend ? currentUnit.damage / 2 : currentUnit.damage;
      unit.hp < 0 ? (unit.hp = 0) : null;
      return true;
    }
    return false;
  }
}

export class SingleHeal implements Action {
  doAction(unit: GameUnit, currentUnit: GameUnit): boolean {
    if (unit.team === currentUnit.team && unit.hp > 0) {
      unit.hp += currentUnit.heal;
      return true;
    }
    return false;
  }
}

export class MassHeal implements Action {
  doAction(units: GameUnit[], currentUnit: GameUnit): boolean {
    units.forEach(unit => {
      if (unit.team === currentUnit.team && unit.hp > 0) {
        unit.hp += currentUnit.heal;
      }
    });
    return true;
  }
}

export class Paralyzer implements Action {
  doAction(unit: GameUnit, currentUnit: GameUnit, gameTick: number): boolean {
    if (unit.team !== currentUnit.team) {
      unit.setParalyzed(gameTick);
      return true;
    }
    return false;
  }
}
