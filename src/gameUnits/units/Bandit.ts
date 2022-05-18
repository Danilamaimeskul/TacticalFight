import {Melee} from '../../strategy/Strategies';
import GameUnit, {UNIT_NAMES} from '../gameUnit';
import {GameUnitPropsType} from './GameUnitPropsType';

const Bandit = (props: GameUnitPropsType): GameUnit => {
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
};

export default Bandit;
