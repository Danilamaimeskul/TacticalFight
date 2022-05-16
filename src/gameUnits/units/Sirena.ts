import {Paralyzer} from '../../strategy/Strategies';
import GameUnit from '../gameUnit';
import {GameUnitPropsType} from './GameUnitPropsType';

const Sirena = (props: GameUnitPropsType): GameUnit => {
  return new GameUnit(
    props.xPosition,
    props.yPosition,
    props.id,
    'Sirena',
    130,
    20,
    require('../../assets/gameUnitsImages/Sirena.png'),
    new Paralyzer(),
  );
};

export default Sirena;
