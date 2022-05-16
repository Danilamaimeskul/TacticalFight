import {Mage} from '../../strategy/Strategies';
import GameUnit from '../gameUnit';
import {GameUnitPropsType} from './GameUnitPropsType';

const Archimage = (props: GameUnitPropsType): GameUnit => {
  return new GameUnit(
    props.xPosition,
    props.yPosition,
    props.id,
    'Archimage',
    90,
    30,
    require('../../assets/gameUnitsImages/Archimage.png'),
    new Mage(),
    20,
  );
};

export default Archimage;
