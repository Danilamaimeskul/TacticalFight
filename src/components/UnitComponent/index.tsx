import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import GameUnit from '../../gameUnits/gameUnit';
import {
  currentUnitChange,
  orderedTeamChange,
} from '../../redux/actions/gameActions';
import StatusMark from '../StatusMark';
import styles from './style';

export type Props = {
  unit: GameUnit;
  team: number;
};

const Unit: React.FC<Props> = ({unit, team}) => {
  const currentUnit: GameUnit = useSelector(
    ({gameReducer}) => gameReducer.currentUnit,
  );
  const orderedTeam: Array<GameUnit> = useSelector(
    ({gameReducer}) => gameReducer.orderedCurrentTeam,
  );
  const [unitHp, setUnitHp] = useState(unit.hp);
  const dispatch = useDispatch();

  const handleChange = (): void => {
    currentUnit.Action.doAction([unit, unit], currentUnit);
    setUnitHp(unit.hp);
    const newCurrentUnit = orderedTeam.pop();
    dispatch(orderedTeamChange(orderedTeam));
    dispatch(currentUnitChange(newCurrentUnit));
    console.log('\n');
    orderedTeam.map((item) => {
      console.log(item.unitName);
    })
  };

  return (
    <TouchableWithoutFeedback onPress={handleChange}>
      <View
        style={[
          styles.unit,
          unit.id === currentUnit.id ? {backgroundColor: 'red'} : null,
        ]}>
        <Image style={styles.image} source={unit.image} />
        <Text>HP: {unitHp}</Text>
        {unit.heal && <Text>HEAL:{unit.heal}</Text>}
        {unit.damage && <Text>DMG:{unit.damage}</Text>}
        <Text>{unit.unitName}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Unit;
