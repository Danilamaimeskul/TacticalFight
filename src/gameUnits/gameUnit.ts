import {Action} from '../strategy/Action';

export const UNIT_NAMES = {
  ARCHIMAGE: 'Archimage',
  BANDIT: 'Bandit',
  BISHOP: 'Bishop',
  CENTAUR: 'Centaur',
  ELF_ARCHER: 'ElfArcher',
  MONK: 'Monk',
  SIREN: 'Siren',
  SKELETON: 'Skeleton',
  SKELETON_MAGE: 'SkeletonMage',
};

class GameUnit {
  xPosition: number;
  yPosition: number;
  id: number;
  team: 1 | 2;
  unitName: string;
  maxHP: number;
  hp: number;
  initiative: number;
  image: NodeRequire;
  isDefend: boolean = false;
  defendGameTick: number | null = null;
  isParalyzed: boolean = false;
  paralyzedGameTick: number | null = null;
  Action: Action;
  damage?: number;
  heal?: number;
  constructor(
    xPosition: number,
    yPosition: number,
    id: number,
    team: 1 | 2,
    unitName: string,
    hp: number,
    initiative: number,
    Action1: Action,
    damage?: number,
    heal?: number,
  ) {
    this.damage = damage;
    this.heal = heal;
    this.maxHP = hp;
    this.team = team;
    this.hp = hp;
    this.id = id;
    this.image = SetImageLink(unitName);
    this.initiative = initiative;
    this.unitName = unitName;
    this.Action = Action1;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
  }
  doAction(units: GameUnit | GameUnit[], gameTick?: number): boolean {
    return this.Action.doAction(units, this, gameTick);
  }
  move(x: number, y: number): boolean {
    if (
      Math.abs(x - this.xPosition) <= 1 &&
      Math.abs(y - this.yPosition) <= 1
    ) {
      this.xPosition = x;
      this.yPosition = y;
      return true;
    }
    return false;
  }
  setDefended(gameTick: number): void {
    this.defendGameTick = gameTick;
    this.isDefend = true;
  }
  setUnDefended(gameTick: number): void {
    if (gameTick - this.defendGameTick >= 12) {
      this.defendGameTick = null;
      this.isDefend = false;
    }
  }
  setParalyzed(gameTick: number): void {
    this.paralyzedGameTick = gameTick;
    this.isParalyzed = true;
  }
  setUnParalyzed(gameTick: number): void {
    if (gameTick - this.defendGameTick >= 12) {
      this.paralyzedGameTick = null;
      this.isDefend = false;
    }
  }
  canActed(currentUnit: GameUnit): boolean {
    switch (currentUnit.Action.constructor.name) {
      case 'Mage':
        return this.team !== currentUnit.team;
      case 'Range':
        return this.team !== currentUnit.team;
      case 'Paralyzer':
        return this.team !== currentUnit.team;
      case 'Melee':
        return (
          Math.abs(this.xPosition - currentUnit.xPosition) <= 1 &&
          Math.abs(this.yPosition - currentUnit.yPosition) <= 1 &&
          this.team !== currentUnit.team
        );
      case 'SingleHeal':
        return this.team === currentUnit.team;
      case 'MassHeal':
        return this.team === currentUnit.team;
    }

    return false;
  }
}

const SetImageLink = (unitName: string): NodeRequire => {
  switch (unitName) {
    case UNIT_NAMES.ARCHIMAGE:
      return require('../assets/gameUnitsImages/Archimage.png');
    case UNIT_NAMES.BANDIT:
      return require('../assets/gameUnitsImages/Bandit.png');
    case UNIT_NAMES.BISHOP:
      return require('../assets/gameUnitsImages/Bishop.png');
    case UNIT_NAMES.CENTAUR:
      return require('../assets/gameUnitsImages/Centaur.png');
    case UNIT_NAMES.ELF_ARCHER:
      return require('../assets/gameUnitsImages/ElfArcher.png');
    case UNIT_NAMES.MONK:
      return require('../assets/gameUnitsImages/Monk.png');
    case UNIT_NAMES.SIREN:
      return require('../assets/gameUnitsImages/Siren.png');
    case UNIT_NAMES.SKELETON:
      return require('../assets/gameUnitsImages/Skeleton.png');
    case UNIT_NAMES.SKELETON_MAGE:
      return require('../assets/gameUnitsImages/SkeletonMage.png');
    default:
      return require('../assets/gameUnitsImages/Grave.png');
  }
};

export default GameUnit;
