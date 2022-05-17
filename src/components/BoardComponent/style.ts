import {StyleSheet} from 'react-native';

export const boardWidth = 320;
export const cellSize = boardWidth / 7;

const styles = StyleSheet.create({
  board: {
    flexWrap: 'wrap',
    width: boardWidth,
    marginHorizontal: 20,
    position: 'relative',
    marginTop: 25,
  },
  cell: {
    width: cellSize,
    height: cellSize,
  },
});

export default styles;
