import {Action} from '../strategy/Action';

class GameUnit {
  xPosition: number;
  yPosition: number;
  id: number;
  team: 1 | 2;
  unitName: string;
  maxHP: number;
  hp: number;
  initiative: number;
  isDefend: boolean = false;
  isParalyzed: boolean = false;
  image: NodeRequire;
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
    image: NodeRequire,
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
    this.image = image;
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

export default GameUnit;
