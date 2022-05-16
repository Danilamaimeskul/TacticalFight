import {Melee} from '../../strategy/Strategies';
import GameUnit from '../gameUnit';
import {GameUnitPropsType} from './GameUnitPropsType';

const Centaur = (props: GameUnitPropsType): GameUnit => {
  return new GameUnit(
    props.xPosition,
    props.yPosition,
    props.id,
    'Centaur',
    150,
    50,
    require('../../assets/gameUnitsImages/Centaur.png'),
    new Melee(),
    50,
  );
};

export default Centaur;
