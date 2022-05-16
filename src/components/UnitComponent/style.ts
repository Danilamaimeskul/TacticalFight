import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  unitName: {
    width: 65,
    height: 65,
    textAlign: 'center',
  },
  unit: {
    position: 'relative',
    width: 65,
    marginHorizontal: 25,
  },
  image: {
    width: 65,
    height: 65,
  },
  background: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    opacity: 0.4,
  },
  shield: {
    position: 'absolute',
    height: 30,
    width: 25,
  },
  paralyzed: {
    position: 'absolute',
    left: 24,
    height: 40,
    width: 30,
    tintColor: 'white',
  },
});

export default styles;
