import {Melee} from '../../strategy/Strategies';
import GameUnit from '../gameUnit';
import {GameUnitPropsType} from './GameUnitPropsType';

const Bandit = (props: GameUnitPropsType): GameUnit => {
  return new GameUnit(
    props.xPosition,
    props.yPosition,
    props.id,
    props.team,
    'Bandit',
    75,
    60,
    require('../../assets/gameUnitsImages/Bandit.png'),
    new Melee(),
    30,
  );
};

export default Bandit;
