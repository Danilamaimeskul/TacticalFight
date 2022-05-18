import {Action} from './Action';
import GameUnit from '../gameUnits/gameUnit';

export class Mage implements Action {
  doAction(units: GameUnit[], currentUnit: GameUnit): boolean {
    if (units[0].id === currentUnit.id) {
      units[0].isDefend = true;
      return true;
    }
    units.forEach(unit => {
      if (unit.team !== currentUnit.team) {
        unit.hp -= unit.isDefend ? currentUnit.damage / 2 : currentUnit.damage;
      }
    });
    return true;
  }
}

export class Melee implements Action {
  doAction(unit: GameUnit, currentUnit: GameUnit): boolean {
    if (unit.id === currentUnit.id) {
      unit.isDefend = true;
      return true;
    }
    if (
      Math.abs(unit.xPosition - currentUnit.xPosition) <= 1 &&
      Math.abs(unit.yPosition - currentUnit.yPosition) <= 1 &&
      unit.team !== currentUnit.team
    ) {
      unit.hp -= unit.isDefend ? currentUnit.damage / 2 : currentUnit.damage;
      return true;
    }
    return false;
  }
}

export class Range implements Action {
  doAction(unit: GameUnit, currentUnit: GameUnit): boolean {
    if (unit.id === currentUnit.id) {
      unit.isDefend = true;
      return true;
    }
    if (unit.team !== currentUnit.team) {
      unit.hp -= unit.isDefend ? currentUnit.damage / 2 : currentUnit.damage;
      return true;
    }
    return false;
  }
}

export class SingleHeal implements Action {
  doAction(unit: GameUnit, currentUnit: GameUnit): boolean {
    if (unit.id === currentUnit.id) {
      unit.isDefend = true;
      return true;
    }
    if (unit.team === currentUnit.team) {
      unit.hp += currentUnit.heal;
      return true;
    }
    return false;
  }
}

export class MassHeal implements Action {
  doAction(units: GameUnit[], currentUnit: GameUnit): boolean {
    if (units[0].id === currentUnit.id) {
      units[0].isDefend = true;
      return true;
    }
    units.forEach(unit => {
      if (unit.team === currentUnit.team) {
        unit.hp += currentUnit.heal;
      }
    });
    return true;
  }
}

export class Paralyzer implements Action {
  doAction(unit: GameUnit, currentUnit: GameUnit): boolean {
    if (unit.id === currentUnit.id) {
      unit.isDefend = true;
      return true;
    }
    if (unit.team !== currentUnit.team) {
      unit.isParalyzed = true;
      return true;
    }
    return false;
  }
}
