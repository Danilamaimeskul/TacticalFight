import React, {useRef} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import GameUnit from '../../gameUnits/gameUnit';
import {currentUnitIndexChange} from '../../redux/actions/gameActions';
import styles from './style';

type Props = {
  children?: React.ReactNode;
};

const Board: React.FC<Props> = ({children}) => {
  let BoardCells: string[][] = [];
  for (let i = 0; i < 6; i++) {
    const row: string[] = [];
    for (let j = 0; j < 7; j++) {
      if ((i + j) % 2 !== 0) {
        row.push('#eeeed2');
      } else {
        row.push('white');
      }
    }
    BoardCells.push(row);
  }

  const currentIndex = useSelector(
    ({gameReducer}) => gameReducer.currentUnitIndex,
  );

  const unit: GameUnit = useSelector(
    ({gameReducer}) => gameReducer.orderedUnits[currentIndex],
  );

  const dispatch = useDispatch();

  const isInRange = (x: number, y: number): boolean => {
    return (
      Math.abs(x - unit?.xPosition) <= 1 && Math.abs(y - unit?.yPosition) <= 1
    );
  };

  return (
    <View style={styles.board}>
      {BoardCells.map((item, y) => {
        return (
          <View style={styles.row} key={y}>
            {item.map((innerItem, x) => {
              return (
                <TouchableWithoutFeedback
                  key={x}
                  onPress={() => {
                    if (unit.move(x, y)) {
                      dispatch(currentUnitIndexChange((currentIndex + 1) % 12));
                    }
                  }}>
                  <View
                    style={[
                      styles.cell,
                      {
                        backgroundColor: innerItem,
                      },
                    ]}>
                    {isInRange(x, y) && <View style={styles.circle} />}
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        );
      })}
      {children}
    </View>
  );
};

export default Board;
