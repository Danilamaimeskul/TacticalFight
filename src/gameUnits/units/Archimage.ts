import {Mage} from '../../strategy/Strategies';
import GameUnit, {UNIT_NAMES} from '../gameUnit';
import {GameUnitPropsType} from './GameUnitPropsType';

const Archimage = (props: GameUnitPropsType): GameUnit => {
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
};

export default Archimage;
