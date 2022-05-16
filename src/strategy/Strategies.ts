import {Action} from './Action';
import GameUnit from '../gameUnits/gameUnit';

export class Mage implements Action {
  doAction(units: GameUnit[], currentUnit: GameUnit): void {
    if (units[0].id === currentUnit.id) {
      units[0].isDefend = true;
    }
    units.forEach(unit => {
      if (unit.team !== currentUnit.team) {
        console.log(unit.isDefend);
        unit.hp -= unit.isDefend ? currentUnit.damage / 2 : currentUnit.damage;
      }
    });
  }
}

export class Melee implements Action {
  doAction(units: GameUnit[], currentUnit: GameUnit): void {
    if (units[0].id === currentUnit.id) {
      units[0].isDefend = true;
    }
    if (
      Math.abs(units[0].xPosition - currentUnit.xPosition) <= 1 &&
      Math.abs(units[0].yPosition - currentUnit.yPosition) <= 1 &&
      units[0].team !== currentUnit.team
    ) {
      units[0].hp -= units[0].isDefend
        ? currentUnit.damage / 2
        : currentUnit.damage;
    }
  }
}

export class Range implements Action {
  doAction(units: GameUnit[], currentUnit: GameUnit): void {
    if (units[0].id === currentUnit.id) {
      units[0].isDefend = true;
    }
    if (units[0].team !== currentUnit.team) {
      units[0].hp -= units[0].isDefend
        ? currentUnit.damage / 2
        : currentUnit.damage;
    }
  }
}

export class SingleHeal implements Action {
  doAction(units: GameUnit[], currentUnit: GameUnit): void {
    if (units[0].id === currentUnit.id) {
      units[0].isDefend = true;
    }
    if (units[0].team === currentUnit.team) {
      units[0].hp += currentUnit.heal;
    }
  }
}

export class MassHeal implements Action {
  doAction(units: GameUnit[], currentUnit: GameUnit): void {
    if (units[0].id === currentUnit.id) {
      units[0].isDefend = true;
    }
    units.forEach(unit => {
      if (unit.team === currentUnit.team) {
        unit.hp += currentUnit.heal;
      }
    });
  }
}

export class Paralyzer implements Action {
  doAction(units: GameUnit[], currentUnit: GameUnit): void {
    if (units[0].id === currentUnit.id) {
      units[0].isDefend = true;
    }
    if (units[0].team !== currentUnit.team) {
      units[0].isParalyzed = true;
    }
  }
}
