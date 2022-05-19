import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import GameUnit from '../../gameUnits/gameUnit';
import {chosenUnitIndexChange} from '../../redux/actions/gameActions';
import styles from './style';

const ChosenUnitStatistic = () => {
  const chosenIndex: number = useSelector(
    ({gameReducer}) => gameReducer.chosenUnitIndex,
  );
  const chosenUnit: GameUnit = useSelector(
    ({gameReducer}) => gameReducer.orderedUnits[chosenIndex],
  );

  const dispatch = useDispatch();

  const closeStatistic = (): void => {
    dispatch(chosenUnitIndexChange(null));
  };

  return (
    <View style={styles.statusBlock}>
      {chosenIndex !== null && (
        <TouchableOpacity onPress={closeStatistic}>
          <View>
            <Text>Name: {chosenUnit?.unitName}</Text>
            <Text>Class: {chosenUnit?.Action.constructor.name}</Text>
            {chosenUnit?.damage && <Text>Damage: {chosenUnit?.damage}</Text>}
            {chosenUnit?.heal && <Text>Heal: {chosenUnit?.heal}</Text>}
            {chosenUnit?.Action.constructor.name === 'Paralyzer' && (
              <Text>Paralyzer</Text>
            )}
            <Text>
              HP: {chosenUnit?.hp}/{chosenUnit?.maxHP}
            </Text>
            <Text>Team: {chosenUnit?.team}</Text>
          </View>
          <Image style={styles.image} source={chosenUnit?.image} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ChosenUnitStatistic;
