import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import GameUnit from '../../gameUnits/gameUnit';
import styles from './style';

export type UnitCardProps = {
  index: number;
};

const UnitCard: React.FC<UnitCardProps> = ({index}) => {
  const currentIndex = useSelector(
    ({gameReducer}) => gameReducer.currentUnitIndex,
  );

  const units: GameUnit[] = useSelector(
    ({gameReducer}) => gameReducer.orderedUnits,
  );

  const height = (1 - units[index].hp / units[index].maxHP) * 100;
  return (
    <View style={[styles.card, {top: index === currentIndex ? -15 : 0}]}>
      <View style={[styles.damaged, {height: `${height}%`}]} />
      <Image style={styles.image} source={units[index].image} />
      <Text>
        {units[index].hp}/{units[index].maxHP}
      </Text>
    </View>
  );
};

export default UnitCard;
