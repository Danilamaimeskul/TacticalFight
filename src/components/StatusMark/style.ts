import {StyleSheet} from 'react-native';
import {cellSize} from '../BoardComponent/style';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: cellSize,
    height: cellSize,
    borderRadius: cellSize / 2,
    opacity: 1,
    zIndex: 0,
  },
});

export default styles;
