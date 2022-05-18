import React from 'react';
import {View, Image, TouchableWithoutFeedback, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import GameUnit from '../../gameUnits/gameUnit';
import {currentUnitIndexChange} from '../../redux/actions/gameActions';
import {Mage} from '../../strategy/Strategies';
import {cellSize} from '../BoardComponent/style';
import styles from './style';

export type Props = {
  unit: GameUnit;
  id: number;
};

const Unit: React.FC<Props> = ({id}) => {
  const allUnits: GameUnit[] = useSelector(
    ({teamsReducer}) => teamsReducer.units,
  );

  const unit: GameUnit = useSelector(
    ({teamsReducer}) => teamsReducer.units[id],
  );
  const currentUnitIndex: number = useSelector(
    ({gameReducer}) => gameReducer.currentUnitIndex,
  );
  const currentUnit: GameUnit = useSelector(
    ({gameReducer}) => gameReducer.orderedUnits[currentUnitIndex],
  );

  const dispatch = useDispatch();

  return (
    <View
      style={[
        styles.unit,
        {
          left: unit.xPosition * cellSize,
          top: unit.yPosition * cellSize,
          backgroundColor: currentUnit.id === unit.id ? 'green' : null,
        },
      ]}>
      <TouchableWithoutFeedback
        onPress={() => {
          // unit.Action.constructor.name позволяет выводить имя класса экшна (Mage, Paralyzer)

          if (
            currentUnit.Action.constructor.name === 'Mage' ||
            currentUnit.Action.constructor.name === 'MassHeal'
          ) {
            if (currentUnit.doAction(allUnits)) {
              dispatch(currentUnitIndexChange((currentUnitIndex + 1) % 12));
            }
          } else {
            if (currentUnit.doAction(unit)) {
              dispatch(currentUnitIndexChange((currentUnitIndex + 1) % 12));
            }
          }
        }}>
        <View>
          <Image
            source={unit.image}
            style={{width: cellSize, height: cellSize}}
          />
          <Text>{unit.hp}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Unit;
