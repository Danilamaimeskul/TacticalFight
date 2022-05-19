import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  unit: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
  },
  shield: {
    position: 'absolute',
    height: 25,
    width: 20,
  },
  paralyzed: {
    position: 'absolute',
    height: 40,
    width: 30,
    zIndex: 10,
    tintColor: 'white',
  },
});

export default styles;
