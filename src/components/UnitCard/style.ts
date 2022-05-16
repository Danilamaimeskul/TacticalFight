import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 0.3,
  },
  image: {
    width: 60,
    height: 170,
  },
  damaged: {
    position: 'absolute',
    backgroundColor: 'red',
    width: 60,
    zIndex: 100,
    opacity: 0.4,
    flexDirection: 'column',
  },
});

export default styles;
