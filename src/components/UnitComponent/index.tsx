import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import orderedCurrentTeam from '../../gameLogic/orderedCurrentTeam';
import GameUnit from '../../gameUnits/gameUnit';
import {
  currentTeamChange,
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
  const currentTeam: 1 | 2 = useSelector(
    ({gameReducer}) => gameReducer.currentTeam,
  );
  const currentUnit: GameUnit = useSelector(
    ({gameReducer}) => gameReducer.currentUnit,
  );
  const orderedTeam: Array<GameUnit> = useSelector(
    ({gameReducer}) => gameReducer.orderedCurrentTeam,
  );
  const team1: teamState = useSelector(({teamsReducer}) => teamsReducer.team1);
  const team2: teamState = useSelector(({teamsReducer}) => teamsReducer.team2);
  const dispatch = useDispatch();
  const [unitHp, setUnitHp] = useState(unit.hp);

  const handleChange = (): void => {
    currentUnit.Action.doAction([unit, unit], currentUnit);
    setUnitHp(unit.hp);
    if (orderedTeam.length > 0) {
      const newCurrentUnit = orderedTeam.pop();
      dispatch(orderedTeamChange(orderedTeam));
      dispatch(currentUnitChange(newCurrentUnit));
    } else {
      dispatch(currentTeamChange(currentTeam === 1 ? 2 : 1));
      const newOrderedTeam = orderedCurrentTeam(
        currentTeam === 1 ? team2 : team1,
      );
      const newcurrentUnit = newOrderedTeam.pop();
      dispatch(orderedTeamChange(newOrderedTeam));
      dispatch(currentUnitChange(newcurrentUnit));
    }
  };
  // {unitHp > 0 ?  : null}
  if (unitHp > 0) {
    return (
      <TouchableWithoutFeedback onPress={handleChange}>
        <View
          style={[
            styles.unit,
            unit.id === currentUnit?.id ? {backgroundColor: 'red'} : null,
          ]}>
          <Image style={styles.image} source={unit.image} />
          <Text>HP: {unitHp}</Text>
          {unit.heal && <Text>HEAL:{unit.heal}</Text>}
          {unit.damage && <Text>DMG:{unit.damage}</Text>}
          <Text>{unit.unitName}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  } else {
    return (
      <View
        style={[
          styles.unit,
          unit.id === currentUnit?.id ? {backgroundColor: 'red'} : null,
        ]}>
        <Image
          style={styles.image}
          source={require('../../assets/gameUnitsImages/Grave.png')}
        />
        <Text>HP: {unitHp}</Text>
        {unit.heal && <Text>HEAL:{unit.heal}</Text>}
        {unit.damage && <Text>DMG:{unit.damage}</Text>}
        <Text>{unit.unitName}</Text>
      </View>
    );
  }
};

export default Unit;
