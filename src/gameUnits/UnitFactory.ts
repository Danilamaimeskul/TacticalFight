import {
  Mage,
  MassHeal,
  Melee,
  Paralyzer,
  Range,
  SingleHeal,
} from '../strategy/Strategies';
import GameUnit, {UNIT_NAMES} from './gameUnit';

import {GameUnitPropsType} from './GameUnitPropsType';

class UnitFactory {
  public static create(unitName: string, props: GameUnitPropsType): GameUnit {
    switch (unitName) {
      case UNIT_NAMES.ARCHIMAGE:
        return new GameUnit(
          props.xPosition,
          props.yPosition,
          props.id,
          props.team,
          UNIT_NAMES.ARCHIMAGE,
          90,
          30,
          new Mage(),
          20,
        );
      case UNIT_NAMES.BANDIT:
        return new GameUnit(
          props.xPosition,
          props.yPosition,
          props.id,
          props.team,
          UNIT_NAMES.BANDIT,
          75,
          60,
          new Melee(),
          30,
        );
      case UNIT_NAMES.BISHOP:
        return new GameUnit(
          props.xPosition,
          props.yPosition,
          props.id,
          props.team,
          UNIT_NAMES.BISHOP,
          130,
          20,
          new MassHeal(),
          undefined,
          25,
        );
      case UNIT_NAMES.CENTAUR:
        return new GameUnit(
          props.xPosition,
          props.yPosition,
          props.id,
          props.team,
          UNIT_NAMES.CENTAUR,
          150,
          50,
          new Melee(),
          50,
        );
      case UNIT_NAMES.ELF_ARCHER:
        return new GameUnit(
          props.xPosition,
          props.yPosition,
          props.id,
          props.team,
          UNIT_NAMES.ELF_ARCHER,
          90,
          60,
          new Range(),
          45,
        );
      case UNIT_NAMES.MONK:
        return new GameUnit(
          props.xPosition,
          props.yPosition,
          props.id,
          props.team,
          UNIT_NAMES.MONK,
          90,
          20,
          new SingleHeal(),
          undefined,
          40,
        );
      case UNIT_NAMES.SIREN:
        return new GameUnit(
          props.xPosition,
          props.yPosition,
          props.id,
          props.team,
          UNIT_NAMES.SIREN,
          130,
          20,
          new Paralyzer(),
        );
      case UNIT_NAMES.SKELETON:
        return new GameUnit(
          props.xPosition,
          props.yPosition,
          props.id,
          props.team,
          UNIT_NAMES.SKELETON,
          100,
          50,
          new Melee(),
          25,
        );
      case UNIT_NAMES.SKELETON_MAGE:
        return new GameUnit(
          props.xPosition,
          props.yPosition,
          props.id,
          props.team,
          UNIT_NAMES.SKELETON_MAGE,
          50,
          40,
          new Mage(),
          20,
        );
      default:
        return new GameUnit(
          props.xPosition,
          props.yPosition,
          props.id,
          props.team,
          UNIT_NAMES.ARCHIMAGE,
          90,
          30,
          new Mage(),
          20,
        );
    }
  }
}

export default UnitFactory;
