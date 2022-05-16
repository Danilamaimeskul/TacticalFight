import {Range} from '../../strategy/Strategies';
import GameUnit from '../gameUnit';
import {GameUnitPropsType} from './GameUnitPropsType';

const ElfArcher = (props: GameUnitPropsType): GameUnit => {
  return new GameUnit(
    props.xPosition,
    props.yPosition,
    props.id,
    'ElfArcher',
    90,
    60,
    require('../../assets/gameUnitsImages/ElfArcher.png'),
    new Range(),
    45,
  );
};

export default ElfArcher;
