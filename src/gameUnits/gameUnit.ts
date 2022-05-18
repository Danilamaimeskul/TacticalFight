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
  isParalyzed: boolean = false;
  isInRange: boolean = false;
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
  doAction(units: Array<GameUnit>): void {
    this.Action.doAction(units, this);
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
