import {MassHeal} from '../../strategy/Strategies';
import GameUnit from '../gameUnit';
import {GameUnitPropsType} from './GameUnitPropsType';

const Bishop = (props: GameUnitPropsType): GameUnit => {
  return new GameUnit(
    props.xPosition,
    props.yPosition,
    props.id,
    props.team,
    'Bishop',
    130,
    20,
    require('../../assets/gameUnitsImages/Bishop.png'),
    new MassHeal(),
    undefined,
    25,
  );
};

export default Bishop;
