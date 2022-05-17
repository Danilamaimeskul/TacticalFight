import {Paralyzer} from '../../strategy/Strategies';
import GameUnit from '../gameUnit';
import {GameUnitPropsType} from './GameUnitPropsType';

const Siren = (props: GameUnitPropsType): GameUnit => {
  return new GameUnit(
    props.xPosition,
    props.yPosition,
    props.id,
    props.team,
    'Siren',
    130,
    20,
    require('../../assets/gameUnitsImages/Siren.png'),
    new Paralyzer(),
  );
};

export default Siren;
