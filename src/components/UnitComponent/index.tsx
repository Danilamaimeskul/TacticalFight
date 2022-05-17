import React, {useState} from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import GameUnit from '../../gameUnits/gameUnit';
import {cellSize} from '../BoardComponent/style';
import styles from './style';

export type Props = {
  unit: GameUnit;
  team: number;
  id: number;
};

const Unit: React.FC<Props> = ({unit, team, id}) => { // Добычу юнита убрать отсюда, юзСелектор
  const [biba, setBiba] = useState(unit.xPosition);

  // Делаем единый стор для обеих команд, добывать сможем через teamReducer.team[id], который мы принимаем с Апп.тсх

  return (
    <View
      style={{
        position: 'absolute',
        left: unit.xPosition * cellSize + 5,
        top: unit.yPosition * cellSize,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableWithoutFeedback
        onPress={() => {
          setBiba(biba + 1);
        }}>
        <Image
          source={unit.image}
          style={{width: cellSize - 10, height: cellSize - 10}}
        />
      </TouchableWithoutFeedback>
      <Text>{id}</Text>  
    </View>
  );
};

export default Unit;
