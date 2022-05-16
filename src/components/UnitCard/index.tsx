import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleProp, ViewStyle} from 'react-native';
import GameUnit from '../../gameUnits/gameUnit';
import Unit from '../UnitComponent';
import styles from './style';

export type UnitCardProps = {
  unit: GameUnit;
};

const UnitCard: React.FC<UnitCardProps> = ({unit}) => {
  const height = (1 - unit?.hp / unit?.maxHP) * 100;
  return (
    <View style={styles.card}>
      <View style={[styles.damaged, {height: `${height}%`}]} />
      <Image style={styles.image} source={unit?.image} />
      <Text>
        {unit?.hp}/{unit?.maxHP}
      </Text>
    </View>
  );
};

export default UnitCard;
