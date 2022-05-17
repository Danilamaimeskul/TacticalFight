import React, {useState} from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import GameUnit from '../../gameUnits/gameUnit';
import {cellSize} from '../BoardComponent/style';
import styles from './style';

export type Props = {
  unit: GameUnit;
  team: number;
};

const Unit: React.FC<Props> = ({unit, team}) => {
  const [biba, setBiba] = useState(unit.xPosition);

  return (
    <View
      style={{
        position: 'absolute',
        left: biba * cellSize,
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
    </View>
  );
};

export default Unit;
