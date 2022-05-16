import {SingleHeal} from '../../strategy/Strategies';
import GameUnit from '../gameUnit';
import {GameUnitPropsType} from './GameUnitPropsType';

const Monk = (props: GameUnitPropsType): GameUnit => {
  return new GameUnit(
    props.xPosition,
    props.yPosition,
    props.id,
    props.team,
    'Monk',
    90,
    20,
    require('../../assets/gameUnitsImages/Monk.png'),
    new SingleHeal(),
    undefined,
    40,
  );
};

export default Monk;
