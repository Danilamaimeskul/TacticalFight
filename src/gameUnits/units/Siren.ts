import {Paralyzer} from '../../strategy/Strategies';
import GameUnit, {UNIT_NAMES} from '../gameUnit';
import {GameUnitPropsType} from './GameUnitPropsType';

const Siren = (props: GameUnitPropsType): GameUnit => {
  return new GameUnit(
    props.xPosition,
    props.yPosition,
    props.id,
    props.team,
    UNIT_NAMES.SIREN,
    130,
    20,
    new Paralyzer(),
  );
};

export default Siren;
