import {SingleHeal} from '../../strategy/Strategies';
import GameUnit, {UNIT_NAMES} from '../gameUnit';
import {GameUnitPropsType} from './GameUnitPropsType';

const Monk = (props: GameUnitPropsType): GameUnit => {
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
};

export default Monk;
