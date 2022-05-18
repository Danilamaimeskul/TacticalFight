import React, {useState} from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {useSelector} from 'react-redux';
import GameUnit from '../../gameUnits/gameUnit';
import teamsReducer from '../../redux/reducers/teamsReducer';
import {cellSize} from '../BoardComponent/style';
import styles from './style';

export type Props = {
  unit: GameUnit;
  id: number;
};

const Unit: React.FC<Props> = ({id}) => {
  // Добычу юнита убрать отсюда, юзСелектор

  const unit: GameUnit = useSelector(
    ({teamsReducer}) => teamsReducer.units[id],
  );

  // Делаем единый стор для обеих команд, добывать сможем через teamReducer.team[id], который мы принимаем с Апп.тсх

  return (
    <View
      style={{
        position: 'absolute',
        left: unit.xPosition * cellSize,
        top: unit.yPosition * cellSize,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableWithoutFeedback
        onPress={() => {
          // setBiba(biba + 1);
          // console.log(biba);
        }}>
        <Image
          source={unit.image}
          style={{width: cellSize, height: cellSize, backgroundColor: null}}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Unit;
