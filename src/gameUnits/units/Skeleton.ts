import {Melee} from '../../strategy/Strategies';
import GameUnit from '../gameUnit';
import {GameUnitPropsType} from './GameUnitPropsType';

const Skeleton = (props: GameUnitPropsType): GameUnit => {
  return new GameUnit(
    props.xPosition,
    props.yPosition,
    props.id,
    props.team,
    'Skeleton',
    100,
    50,
    require('../../assets/gameUnitsImages/Skeleton.png'),
    new Melee(),
    25,
  );
};

export default Skeleton;
