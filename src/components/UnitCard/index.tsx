import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import GameUnit from '../../gameunit/gameUnit';
import {chosenUnitIndexChange} from '../../redux/actions/gameActions';
import styles from './style';

export type UnitCardProps = {
  index: number;
};

const UnitCard: React.FC<UnitCardProps> = ({index}) => {
  const currentIndex = useSelector(
    ({gameReducer}) => gameReducer.currentUnitIndex,
  );

  const unit: GameUnit = useSelector(
    ({gameReducer}) => gameReducer.orderedUnits[index],
  );

  const chosenIndex: number = useSelector(
    ({gameReducer}) => gameReducer.chosenUnitIndex,
  );

  let background: string;

  if (index === chosenIndex) {
    background = 'purple';
  } else {
    background = unit.team === 1 ? 'yellow' : 'orange';
  }

  const dispatch = useDispatch();

  const height = (1 - unit.hp / unit.maxHP) * 100;
  return (
    <TouchableOpacity onPress={() => dispatch(chosenUnitIndexChange(index))}>
      <View
        style={[
          styles.card,
          {top: index === currentIndex ? -15 : 0, backgroundColor: background},
        ]}>
        <View style={[styles.damaged, {height: `${height}%`}]} />
        <Image style={styles.image} source={unit.image} />
        <Text>
          {unit.hp}/{unit.maxHP}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default UnitCard;
