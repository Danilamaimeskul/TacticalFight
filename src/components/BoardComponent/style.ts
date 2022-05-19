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
  row: {
    flexDirection: 'row',
  },
  cell: {
    justifyContent: 'center',
    alignItems: 'center',
    width: cellSize,
    height: cellSize,
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    backgroundColor: 'gray',
  },
});

export default styles;
