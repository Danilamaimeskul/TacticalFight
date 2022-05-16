import {Mage} from '../../strategy/Strategies';
import GameUnit from '../gameUnit';
import {GameUnitPropsType} from './GameUnitPropsType';

const SkeletonMage = (props: GameUnitPropsType): GameUnit => {
  return new GameUnit(
    props.xPosition,
    props.yPosition,
    props.id,
    props.team,
    'SkeletonMage',
    50,
    40,
    require('../../assets/gameUnitsImages/SkeletonMage.png'),
    new Mage(),
    20,
  );
};

export default SkeletonMage;
