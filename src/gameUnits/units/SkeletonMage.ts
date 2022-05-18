import {Mage} from '../../strategy/Strategies';
import GameUnit, {UNIT_NAMES} from '../gameUnit';
import {GameUnitPropsType} from './GameUnitPropsType';

const SkeletonMage = (props: GameUnitPropsType): GameUnit => {
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
};

export default SkeletonMage;
