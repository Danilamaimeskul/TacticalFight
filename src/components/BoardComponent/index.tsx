import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import style from './style';

type Props = {
  children?: React.ReactNode;
};

const Board: React.FC<Props> = ({children}) => {
  let BoardCells: string[][] = [];
  for (let i = 0; i < 6; i++) {
    const row: string[] = [];
    for (let j = 0; j < 7; j++) {
      if ((i + j) % 2 !== 0) {
        row.push('red');
      } else {
        row.push('white');
      }
    }
    BoardCells.push(row);
  }

  return (
    <View style={styles.board}>
      {BoardCells.map((item, index) => {
        return (
          <View style={{flexDirection: 'row'}} key={index}>
            {item.map((innerItem, innerIndex) => {
              return (
                <View
                  style={[
                    styles.cell,
                    {
                      backgroundColor: innerItem,
                    },
                  ]}
                  key={innerIndex}
                />
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
