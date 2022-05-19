import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {useSelector} from 'react-redux';
import GameUnit from '../../gameUnits/gameUnit';
import styles from './style';

const CurrentUnitStatistic = () => {
  const currentIndex: number = useSelector(
    ({gameReducer}) => gameReducer.currentUnitIndex,
  );

  const currentUnit: GameUnit = useSelector(
    ({gameReducer}) => gameReducer.orderedUnits[currentIndex],
  );

  return (
    <View style={styles.statusBlock}>
      <View>
        <Text>{currentUnit?.unitName}</Text>
        <Text>Class: {currentUnit?.Action.constructor.name}</Text>
        {currentUnit?.damage && <Text>Damage: {currentUnit?.damage}</Text>}
        {currentUnit?.heal && <Text>Heal: {currentUnit?.heal}</Text>}
        {currentUnit?.Action.constructor.name === 'Paralyzer' ? (
          <Text>Paralyzer</Text>
        ) : null}
        <Text>
          HP: {currentUnit?.hp}/{currentUnit?.maxHP}
        </Text>
        <Text>Team: {currentUnit?.team}</Text>
      </View>
      <Image style={styles.image} source={currentUnit?.image} />
    </View>
  );
};

export default CurrentUnitStatistic;
